<script lang="ts">
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import { cn } from '$utils';
	import { page } from '$app/stores';
	import SiteHeader from '$components/site-header.svelte';
	let { children } = $props();
	let isRoot = $state($page.url.pathname === '/');

	$inspect(isRoot).with(console.trace);
</script>

<ModeWatcher defaultMode="dark" />

<div class="relative flex min-h-screen flex-col md:flex-col-reverse" id="page">
	<div class="flex flex-1">
		{@render children()}
	</div>
	<header
		class={cn(
			'sticky bottom-0 z-40 w-full px-2 pb-2 md:bottom-[none] md:top-0 md:pb-0 md:pt-2',
			!isRoot && 'bg-neutral-900'
		)}
	>
		<SiteHeader />
	</header>
</div>
