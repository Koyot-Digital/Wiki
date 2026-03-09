import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const DATA_PATH = path.resolve('./src/lib/data/creditsData.json')
const STATIC_DIR = path.resolve('./static/images/people')
const VALID_PHOTO_TYPES = new Set(['bust', 'full'])
// #region People
async function collectRobloxIds(data) {
	const sections = ['developers', 'testers', 'moderators', 'contributors']

	/** @type {Map<string, number>} */
	const usernameToId = new Map()
	const usernamesToResolve = []

	for (const section of sections) {
		for (const entry of data[section] || []) {
			if (typeof entry === 'object' && entry.username) {
				usernamesToResolve.push(entry.username)
			}
		}
	}

	// Resolve usernames in batches (Roblox allows 100 per call)
	const chunkSize = 100

	for (let i = 0; i < usernamesToResolve.length; i += chunkSize) {
		const chunk = usernamesToResolve.slice(i, i + chunkSize)

		const res = await fetch('https://users.roblox.com/v1/usernames/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ usernames: chunk, excludeBannedUsers: true }),
		})
		const json = await res.json()

		for (const u of json.data) {
			const originalUsername = chunk.find(u2 => u2.toLowerCase() === u.name.toLowerCase())
			if (originalUsername) {
				usernameToId.set(originalUsername, u.id)
			}
		}
	}

	return usernameToId
}
async function fetchAvatarBatch(items, photoType) {
	if (items.length === 0) return

	const userIds = items.map(item => item.id)
	const endpoint = photoType === 'full' ? 'avatar' : 'avatar-bust'
	const api = `https://thumbnails.roblox.com/v1/users/${endpoint}?userIds=${userIds.join(',')}&size=420x420&format=Webp&isCircular=false`

	const res = await fetch(api)
	const json = await res.json()

	const idToItem = new Map(items.map(item => [item.id, item]))

	for (const image of json.data) {
		try {
			if (!image.imageUrl) continue

			const item = idToItem.get(image.targetId)
			if (!item) {
				console.warn(`No item found for id ${image.targetId}, skipping`)
				continue
			}

			const imgRes = await fetch(image.imageUrl)
			const buffer = Buffer.from(await imgRes.arrayBuffer())

			const outPath = path.join(STATIC_DIR, +'/people/' + `${item.username}.avif`)

			await sharp(buffer).avif({ quality: 60 }).toFile(outPath)

			console.log(`Saved ${item.username}.avif (${photoType})`)
		} catch (err) {
			console.error(`Failed for ${image.targetId}:`, err)
		}
	}
}
//#endregion
async function main() {
	const photoTypeArg = (process.argv[2] || 'bust').toLowerCase()
	if (!VALID_PHOTO_TYPES.has(photoTypeArg)) {
		console.error('Invalid phototype. Use "bust" or "full".')
		process.exit(1)
	}
	/** @type {'bust' | 'full'} */
	const photoType = photoTypeArg

	await fs.mkdir(STATIC_DIR, { recursive: true })

	const raw = await fs.readFile(DATA_PATH, 'utf-8')
	const data = JSON.parse(raw)

	const usernameToId = await collectRobloxIds(data)
	const items = [...usernameToId.entries()].map(([username, id]) => ({ username, id }))

	console.log(`Found ${items.length} Roblox IDs (phototype: ${photoType})`)

	// Roblox gets grumpy above ~50 per call
	const chunkSize = 50
	for (let i = 0; i < items.length; i += chunkSize) {
		const chunk = items.slice(i, i + chunkSize)
		await fetchAvatarBatch(chunk, photoType)
	}

	console.log('Done')
}
//#endregion
console.warn('Fetching Busts...')
main()
