<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children?: Snippet } = $props();
</script>

<div class="row">
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="scss" scoped>
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
		padding: 4px;
	}
</style>
