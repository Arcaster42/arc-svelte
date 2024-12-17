<script lang="ts">
  import Icon from './Icon.svelte'
  import type { ButtonType, Color, Size } from './types.js'

  let {
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
    refId,
    style
  }: {
    type?: ButtonType
    label?: string
    color?: Color
    textColor?: string
    size?: Size
    block?: boolean
    loading?: boolean
    disabled?: boolean
    icon?: keyof typeof import('@mdi/js')
    onclick?: () => void
    refId?: string
    style?: string
  } = $props()
</script>

{#if type !== 'icon'}
  <button
    id={refId}
    class={`button ${type} ${color} ${size}`}
    {style}
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
{#if icon && type === 'icon'}
  <button
    id={refId}
    class={`icon-button ${color} ${size}`}
    {onclick}
    {disabled}
    class:loading
  >
    {#if !loading}
      <Icon {icon} color={textColor} {size} />
    {/if}
    {#if loading}
      <div class="loader {size} {color}"></div>
    {/if}
  </button>
{/if}

<style scoped>.button {
  font-family: Roboto;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
}
.button.small {
  height: 26px;
  width: 100px;
}
.button.medium {
  height: 32px;
  width: 120px;
}
.button.large {
  height: 40px;
  width: 160px;
  font-size: large;
}
.button.larger {
  height: 64px;
  width: 200px;
  font-size: larger;
}
.button.block {
  width: 100%;
}
.button[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.button::before {
  content: "";
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
}
.default:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.default:hover:active {
  background-color: lightgrey;
}

.outline {
  border: 1px solid black;
}

.flat {
  border: none;
}

.none {
  color: black;
  background-color: #c4c4c4;
}
.none:hover {
  background-color: #b5b5b5;
}
.none:hover:active {
  background-color: #8f8f8f;
}

.primary {
  color: white;
  background-color: #3498db;
}
.primary:hover {
  background-color: #3286be;
}
.primary:hover:active {
  background-color: #2a72a3;
}

.primary-dark {
  color: white;
  background-color: #2c3e50;
}
.primary-dark:hover {
  background-color: #2a72a3;
}
.primary-dark:hover:active {
  background-color: #3286be;
}

.warning {
  color: white;
  background-color: #e5c544;
}
.warning:hover {
  background-color: #d9b43b;
}
.warning:hover:active {
  background-color: #cda22f;
}

.danger {
  color: white;
  background-color: #e32a2a;
}
.danger:hover {
  background-color: #d32626;
}
.danger:hover:active {
  background-color: #c42222;
}

.success {
  color: white;
  background-color: #1abc9c;
}
.success:hover {
  background-color: #17a085;
}
.success:hover:active {
  background-color: #14866d;
}

.loader {
  color: #ffffff;
  font-size: 1em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%, 95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%, 59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes round {
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
}
.icon-button .primary {
  background-color: #3498db;
}
.icon-button.small {
  width: 35px;
  height: 35px;
}</style>
