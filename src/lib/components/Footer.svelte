<script>
import KDLogo from '$lib/images/icons&logos/Koyot-Digital-Emblem.avif'
import LicenceImg from '$lib/images/icons&logos/license.svg'
import GitHub from '$lib/images/icons&logos/github-mark.svg'
import Discord from '$lib/images/icons&logos/Discord.svg'
</script>

<footer class="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10">
	<aside>
		<img
			alt="Koyot Digital Logo"
			width="70"
			height="70"
			class="inline-block fill-current"
			style="border-radius: 0.25rem;"
			src={KDLogo}
		/>
		<p class="font-bold">
			Koyot Digital
			<br />
			"we do things"
		</p>
		<p>
			Copyright © {new Date().getFullYear()} - CC BY-SA 4.0, see LICENSE.md for details.
		</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<!-- GitHub -->
			<a href="https://github.com/koyot-digital/Wiki/" aria-label="GitHub Link">
				<img src={GitHub} width="24" height="24" class="fill-stone-100" alt="" />
			</a>
			<!-- YouTube -->
			<a href="https://www.youtube.com/@KoyotDigital" aria-label="YouTube Link">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-stone-100"
				>
					<path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					></path>
				</svg>
			</a>
			<a
				href="https://discord.gg/C4JRMA3gB7"
				aria-label="Discord Server link"
				class="align-middle pt-1"
			>
				<img src={Discord} width="24" height="18.2" class="fill-stone-100" alt="" />
			</a>
		</div>
	</nav>
	<aside>
		<img
			alt="Licenced under CC BY-SA 4.0"
			height="35"
			width="100"
			class="inline-block fill-current"
			style="border-radius: 0.5rem;"
			src={LicenceImg}
		/>
	</aside>
</footer>
