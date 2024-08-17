<script lang="ts">
	import { onMount } from 'svelte';

	const {
		icon,
		color = 'black',
		size = 'medium',
		width,
		height
	}: {
		icon: keyof typeof import('@mdi/js');
		color?: string;
		size?: 'small' | 'medium' | 'large';
		width?: string;
		height?: string;
	} = $props();

	let path = $state('');

	const sizeMap = {
		small: '15px',
		medium: '25px',
		large: '50px'
	};

	async function getIcon() {
		const module = await import('@mdi/js');
		return module[icon];
	}

	onMount(async () => {
		path = await getIcon();
	});
</script>

<svg
	fill={color}
	width={width ? width : sizeMap[size]}
	height={height ? height : sizeMap[size]}
	preserveAspectRatio="xMidYMid meet"
	viewBox="0 0 24 24"
>
	<path d={path}></path>
</svg>
