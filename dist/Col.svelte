<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { AlignStyle } from './types.ts'

  const {
    children,
    align = 'center',
    gapless
  }: { children?: Snippet; align?: AlignStyle; gapless?: boolean } = $props()
</script>

<div class="col" class:gapless style={`align-items: ${align};`}>
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
}
.col.gapless {
  padding: 0;
}

:global(.col > *) {
  width: 100%;
  height: auto;
}
:global(.col > *).gapless {
  padding: 0;
  margin: 0;
}</style>
