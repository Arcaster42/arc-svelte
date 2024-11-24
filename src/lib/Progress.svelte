<script lang="ts">
  const {
    type = 'linear',
    progress,
    showProgress,
    style
  }: {
    type?: 'linear'
    progress: string | number
    showProgress?: boolean
    style?: string
  } = $props()
</script>

<div class="wrapper">
  {#if type === 'linear'}
    {#if showProgress}
      <span class="progress" {style}>
        {progress.toString().includes('%') ? progress : progress + '%'}
      </span>
    {/if}
    <div
      class="bar"
      style={`width: ${progress.toString().includes('%') ? progress : progress + '%'}; ${style}`}
    ></div>
  {/if}
</div>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    width: 100%;
    height: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: visible;

    .progress {
      position: absolute;
      top: -20px;
    }

    .bar {
      height: 100%;
      background-color: variables.$primary-color;
      width: 0%;
      transition: width 1.25s ease-in-out;
      border-radius: 10px;
    }
  }
</style>
