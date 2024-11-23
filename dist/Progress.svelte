<script lang="ts">
	const {
		type = 'linear',
		progress,
		showProgress
	}: { type?: 'linear'; progress: string; showProgress?: boolean } = $props();
</script>

<div class="wrapper">
	{#if showProgress}
		<span class="progress">{progress + '%'}</span>
	{/if}
	<div class="bar" style={`width: ${progress}%`}></div>
</div>

<style scoped>.wrapper {
  position: relative;
  width: 100%;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: visible; /* Add this line */
}
.wrapper .progress {
  position: absolute;
  top: -20px;
}
.wrapper .bar {
  height: 100%;
  background-color: #3b82f6;
  width: 0%;
  transition: width 1.25s ease-in-out;
  border-radius: 10px;
}</style>
