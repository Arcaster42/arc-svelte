<script lang="ts">
	import Icon from './Icon.svelte';

	let {
		className,
		type = 'default',
		label,
		color = 'none',
		textColor,
		size = 'medium',
		block = false,
		loading = false,
		disabled = false,
		icon,
		onclick,
		refId
	}: {
		className?: string;
		type?: 'default' | 'outline' | 'flat' | 'icon';
		label?: string;
		color?: 'none' | 'primary' | 'secondary' | 'warning' | 'danger';
		textColor?: string;
		size?: 'small' | 'medium' | 'large' | 'larger';
		block?: boolean;
		loading?: boolean;
		disabled?: boolean;
		icon?: keyof typeof import('@mdi/js');
		onclick?: () => void;
		refId?: string;
	} = $props();
</script>

{#if type !== 'icon'}
	<button
		id={refId}
		class={`button ${type} ${color} ${size} ${className}`}
		class:loading
		class:block
		{disabled}
		{onclick}
	>
		{#if !loading}
			{label}
		{/if}
		{#if loading}
			<div class="loader {size}"></div>
		{/if}
	</button>
{/if}
{#if type === 'icon' && icon}
	<button id={refId} class={`icon-button ${color}`} {onclick} {disabled}
		><Icon {icon} color={textColor} /></button
	>
{/if}

<style lang="scss" scoped>
	@import '../style/variables';

	.button {
		font-family: Roboto;
		text-transform: uppercase;
		font-weight: bold;
		transition: all 0.2s ease-in-out;
		position: relative;
		cursor: pointer;

		&.small {
			height: 26px;
			width: 100px;
		}

		&.medium {
			height: 32px;
			width: 120px;
		}

		&.large {
			height: 40px;
			width: 160px;
			font-size: large;
		}

		&.larger {
			height: 64px;
			width: 200px;
			font-size: larger;
		}

		&.block {
			width: 100%;
		}

		&[disabled] {
			opacity: 0.5;
			pointer-events: none;
		}
	}

	.button::before {
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	.button > * {
		display: inline-block;
		vertical-align: middle;
	}

	.default {
		border: none;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

		&:hover {
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

			&:active {
				background-color: lightgrey;
			}
		}
	}

	.outline {
		border: 1px solid black;
	}

	.flat {
		border: none;
	}

	.none {
		color: black;
		background-color: $default-color;

		&:hover {
			background-color: $default-color-accent;

			&:active {
				background-color: $default-color-active;
			}
		}
	}

	.primary {
		color: white;
		background-color: $primary-color;

		&:hover {
			background-color: $primary-color-accent;

			&:active {
				background-color: $primary-color-active;
			}
		}
	}

	.loader {
		border: 5px solid #f3f3f3;
		border-top: 5px solid #3498db;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		animation: spin 2s linear infinite;

		&.large {
			border: 10px solid #f3f3f3;
			border-top: 10px solid #3498db;
			width: 20px;
			height: 20px;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.icon-button {
		width: 50px;
		height: 50px;
		border: none;
		padding: 0;
		margin: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: 50%;

		.primary {
			background-color: $primary-color;
		}
	}

	svg {
		display: block;
		width: 10px;
		height: 10px;
	}
</style>
