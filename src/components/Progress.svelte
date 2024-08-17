<script lang="ts">
	const { type = 'linear', progress }: { type?: 'linear'; progress: string } = $props();
</script>

<div class="wrapper">
	<div class="bar" style={`width: ${progress}%`}></div>
</div>

<style lang="scss" scoped>
	.wrapper {
		width: 100%;
		height: 10px;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		overflow: hidden;

		.bar {
			height: 100%;
			background-color: #3b82f6;
			width: 0%;
			transition: width 1.25s ease-in-out;
			border-radius: 10px;
		}
	}
</style>
