<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { JustifyStyle } from './types.ts'

  const {
    children,
    justify = 'space-evenly',
    gapless
  }: {
    children?: Snippet
    justify?: JustifyStyle
    gapless?: boolean
  } = $props()
</script>

<div class="row" class:gapless style={`justify-content: ${justify};`}>
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

    &.gapless {
      padding: 0;
    }
  }

  :global(.row.gapless > *) {
    padding: 0 !important;
  }
</style>
