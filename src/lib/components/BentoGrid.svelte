<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$utils';

	type BentoGridProps = {
		gridClass?: string;
		data: {
			title: string;
			description: string;
			itemClass?: string;
			header?: Snippet;
			icon?: Snippet;
		}[];
	};
	let { gridClass, data }: BentoGridProps = $props();
</script>

{#snippet gridItem({ title, description, itemClass, header, icon }: {title: string; description: string; itemClass?: string; header?: Snippet;
		icon?: Snippet;})}
	<div
		class={cn(
			'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
			itemClass
		)}
	>
		{@render header?.()}
		<div class="transition duration-200 group-hover/bento:translate-x-2">
			{@render icon?.()}
			<div class="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
				{title}
			</div>
			<div class="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
				{description}
			</div>
		</div>
	</div>
{/snippet}

<div
	class={cn(
		'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
		gridClass
	)}
>
	{#each data as item}
		{@render gridItem(item)}
	{/each}
</div>
