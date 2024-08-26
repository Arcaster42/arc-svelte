<script lang="ts">
	const { children }: { children?: Snippet } = $props();
</script>

<div class="col">
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="scss" scoped>
	.col {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 4px;
	}
</style>
