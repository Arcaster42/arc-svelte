<script lang="ts">
	import type { Snippet } from 'svelte';

	type JustifyStyle =
		| 'start'
		| 'center'
		| 'end'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-evenly'
		| 'space-around';

	const { children, justify = 'space-evenly' }: { children?: Snippet; justify?: JustifyStyle } =
		$props();
</script>

<div class="row" style={`justify-content: ${justify};`}>
	{#if children}
		{@render children()}
	{/if}
</div>

<style scoped>.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 4px;
}</style>
