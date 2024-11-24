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

<style lang="scss" scoped>
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
    background-color: variables.$default-color;

    &:hover {
      background-color: variables.$default-color-accent;

      &:active {
        background-color: variables.$default-color-active;
      }
    }
  }

  .primary {
    color: white;
    background-color: variables.$primary-color;

    &:hover {
      background-color: variables.$primary-color-accent;

      &:active {
        background-color: variables.$primary-color-active;
      }
    }
  }

  .primary-dark {
    color: white;
    background-color: variables.$primary-color-dark;

    &:hover {
      background-color: variables.$primary-color-dark-accent;

      &:active {
        background-color: variables.$primary-color-dark-active;
      }
    }
  }

  .warning {
    color: white;
    background-color: variables.$warning-color;

    &:hover {
      background-color: variables.$warning-color-accent;

      &:active {
        background-color: variables.$warning-color-active;
      }
    }
  }

  .danger {
    color: white;
    background-color: variables.$danger-color;

    &:hover {
      background-color: variables.$danger-color-accent;

      &:active {
        background-color: variables.$danger-color-active;
      }
    }
  }

  .success {
    color: white;
    background-color: variables.$success-color;

    &:hover {
      background-color: variables.$success-color-accent;

      &:active {
        background-color: variables.$success-color-active;
      }
    }
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
    animation:
      mltShdSpin 1.7s infinite ease,
      round 1.7s infinite ease;
  }

  @keyframes mltShdSpin {
    0% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em,
        0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em,
        0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em,
        -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em,
        -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em,
        -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em,
        0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
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

    .primary {
      background-color: variables.$primary-color;
    }

    &.small {
      width: 35px;
      height: 35px;
    }
  }
</style>
