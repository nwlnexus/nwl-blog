<script lang="ts">
	import { page } from '$app/stores';
	import { navConfig, siteConfig } from '$lib/config';
	import { cn } from '$utils';
	import Github from './icons/github.svelte';

	let isRoot = $state($page.url.pathname === '/');
</script>

<div
	class={cn(
		'container flex h-14 items-center rounded-md bg-neutral-800 text-white !outline outline-2 !outline-neutral-700 dark:!outline-none',
		isRoot && '!outline-0 md:bg-transparent'
	)}
>
	<div class="flex">
		<a href="/" class="mr-6 flex items-center transition-opacity hover:opacity-75">Logo</a>
	</div>

	<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
		<div class="w-full flex-1 md:w-auto md:flex-none">
			<!-- Search CMDK here eventually -->
		</div>
	</div>
	<nav class="flex items-center text-sm font-semibold leading-6">
		<ul class="hidden space-x-8 md:flex">
			{#each navConfig.mainNav as navItem}
				<li>
					<a href={navItem.href} class="hover:text-magnum-500 transition-colors">
						{navItem.title}
					</a>
				</li>
			{/each}
		</ul>
		<div
			class="flex items-center gap-6 border-neutral-700 text-neutral-400 sm:ml-6 sm:pl-6 md:border-l"
		>
			<a
				href={siteConfig.links.github}
				target="_blank"
				rel="noopener noreferrer"
				class="transition-colors hover:text-neutral-50"
				><Github class="h-5 w-5" /><span class="sr-only">View the GitHub Repository</span></a
			>
		</div>
	</nav>
</div>
