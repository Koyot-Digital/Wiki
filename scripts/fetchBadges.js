import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const UNIVERSE_ID = 5417936082
const BADGES_DIR = path.join(process.cwd(), 'static', 'images', 'badges')
const JSON_PATH = path.join(process.cwd(), 'static', 'images', 'badgesData.json')

// simple CLI args: --universe=<id> and --verbose
const rawArgs = process.argv.slice(2)
let universeId = UNIVERSE_ID
let VERBOSE = false
for (const a of rawArgs) {
	if (a.startsWith('--universe=')) universeId = a.split('=')[1]
	if (a === '--verbose') VERBOSE = true
}

async function fetchBadgeIDs() {
	console.log(`Fetching badge IDs for universe ${universeId}...`)
	const url = `https://badges.roblox.com/v1/universes/${universeId}/badges?sortBy=Rank&limit=100&sortOrder=Asc`
	if (VERBOSE) console.log('Request URL:', url)
	const res = await fetch(url)
	if (!res.ok) {
		const body = await res.text().catch(() => '')
		const msg = `Failed to fetch badges: ${res.status} ${res.statusText} - ${body}`
		if (res.status === 404) {
			throw new Error(
				msg + `\n404 - check that universe ${universeId} is correct and public.`
			)
		}
		throw new Error(msg)
	}
	const json = await res.json()
	console.log(`Fetched ${Array.isArray(json.data) ? json.data.length : 0} badges`)
	if (VERBOSE) console.log('Response data:', JSON.stringify(json.data, null, 2))
	return json.data || []
}

async function fetchBadgeThumbnails(badges) {
	const ids = (badges || []).map(b => b.id).filter(Boolean)
	if (!ids.length) return {}
	const idParam = ids.join(',')
	const url = `https://thumbnails.roblox.com/v1/badges/icons?badgeIds=${idParam}&size=150x150&format=Webp&isCircular=true`
	if (VERBOSE) console.log('Thumbnails request URL:', url)
	const res = await fetch(url)
	if (!res.ok) {
		const body = await res.text().catch(() => '')
		throw new Error(`Failed to fetch thumbnails: ${res.status} ${res.statusText} - ${body}`)
	}
	const json = await res.json()
	if (VERBOSE) console.log('Thumbnails response:', JSON.stringify(json, null, 2))
	const map = {}
	for (const item of json.data || []) {
		map[String(item.targetId)] = item
	}
	return map
}

function sanitizeName(name) {
	return String(name)
		.normalize('NFKD')
		.replace(/[<>:"/\\|?*]/g, '')
		.replace(/\s+/g, '_')
		.replace(/[^\w\-_.]/g, '')
		.slice(0, 200)
}

async function downloadImage(url, destPath) {
	console.log(`Downloading ${url}`)
	const res = await fetch(url)
	if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`)
	const buf = Buffer.from(await res.arrayBuffer())

	try {
		console.log(`Converting to AVIF and saving ${destPath}`)
		await sharp(buf).avif({ quality: 60 }).toFile(destPath)
	} catch (err) {
		console.warn('sharp conversion failed, writing original buffer instead:', err.message)
		await fs.writeFile(destPath, buf)
	}
}

async function main() {
	console.log('Ensuring badges directory exists at', BADGES_DIR)
	await fs.mkdir(BADGES_DIR, { recursive: true })
	const badges = await fetchBadgeIDs()
	const thumbMap = await fetchBadgeThumbnails(badges)

	const results = []

	for (const badge of badges) {
		try {
			// prefer thumbnail imageUrl returned from thumbnails API
			const thumb = thumbMap[String(badge.id)]
			const iconUrl =
				thumb && thumb.state === 'Completed' && thumb.imageUrl
					? thumb.imageUrl
					: badge.iconImageUrl || null
			const name = badge.name || `badge_${badge.id}`
			const description = badge.description || ''

			if (!iconUrl) {
				console.log(`Badge ${badge.id} has no icon URL, skipping`)
				results.push({ id: badge.id, name, description, file: null })
				continue
			}

			const filename = `${sanitizeName(name)}.avif`
			const dest = path.join(BADGES_DIR, filename)

			console.log(`Processing badge ${badge.id} — ${name}`)
			await downloadImage(iconUrl, dest)

			results.push({ id: badge.id, name, description, file: `images/badges/${filename}` })
			console.log(`Saved: ${filename}`)
		} catch (err) {
			console.error('Error processing badge', badge.id, err.message)
			results.push({
				id: badge.id,
				name: badge.name || null,
				description: badge.description || '',
				file: null,
				error: err.message,
			})
		}
	}

	console.log('Writing JSON data to', JSON_PATH)
	await fs.writeFile(JSON_PATH, JSON.stringify(results, null, 2))
	console.log('Badge data and images saved to', BADGES_DIR)
}

main().catch(err => {
	console.error('Script failed:', err)
	process.exitCode = 1
})
