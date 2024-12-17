<script lang="ts">
  import type { Snippet } from 'svelte'

  const {
    isOpen = $bindable(),
    contentSnippet
  }: { isOpen: boolean; contentSnippet?: Snippet } = $props()
</script>

{#if isOpen}
  <div class="wrapper">
    <div class="modal">
      {#if contentSnippet}
        {@render contentSnippet()}
      {/if}
    </div>
  </div>
{/if}

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .modal {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
