<script lang="ts">
  import { onMount, type Snippet } from 'svelte'

  const {
    titleSnippet,
    subtitleSnippet,
    contentSnippet,
    actionsSnippet,
    width = '300px',
    height = '300px',
    draggable
  }: {
    titleSnippet?: Snippet
    subtitleSnippet?: Snippet
    contentSnippet?: Snippet
    actionsSnippet?: Snippet
    width?: string
    height?: string
    draggable?: boolean
  } = $props()

  let cardElement: HTMLDivElement

  onMount(() => {
    cardElement.addEventListener('dragstart', (event) => {
      event.dataTransfer?.setData('text/plain', 'This text may be dragged')
    })
  })
</script>

<div class="card" style:height style:width bind:this={cardElement} {draggable}>
  {#if titleSnippet}
    <div class="title">
      {@render titleSnippet()}
      {#if subtitleSnippet}
        <div class="subtitle">{@render subtitleSnippet()}</div>
      {/if}
    </div>
  {/if}
  {#if contentSnippet}
    <div class="content">{@render contentSnippet()}</div>
  {/if}
  {#if actionsSnippet}
    <div class="actions">{@render actionsSnippet()}</div>
  {/if}
</div>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

    .title {
      width: 100%;
    }

    .subtitle {
      color: grey;
    }
  }
</style>
