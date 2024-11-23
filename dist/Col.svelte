<script lang="ts">
	import type { Snippet } from 'svelte';

	type AlignStyle = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end';

	const { children, align = 'center' }: { children?: Snippet; align?: AlignStyle } = $props();
</script>

<div class="col" style={`align-items: ${align};`}>
	{#if children}
		{@render children()}
	{/if}
</div>

<style scoped>.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4px;
}</style>
