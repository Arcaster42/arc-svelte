<script lang="ts">
  import Icon from './Icon.svelte'
  import type { Color } from './types.ts'

  let {
    color,
    label,
    icon,
    iconColor,
    outline,
    active = $bindable()
  }: {
    color?: Color
    label: string
    icon?: keyof typeof import('@mdi/js')
    iconColor?: string
    outline?: boolean
    active?: boolean
  } = $props()

  function setActive() {
    active = !active
  }
</script>

<button class="chip {color}" class:outline class:active onclick={setActive}>
  {#if icon}<Icon {icon} size="small" color={iconColor || 'black'} />{/if}<span
    class:label={icon}>{label}</span
  >
</button>

<style lang="scss" scoped>
  .chip {
    display: inline-block;
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    margin: 5px;
    cursor: pointer;
    vertical-align: middle;
    border: none;
    transition: all 0.2s ease-in-out;
    background-color: variables.$default-color;

    &:hover {
      background-color: variables.$default-color-accent;

      &.outline {
        background-color: rgba(variables.$default-color, 0.2);
      }
    }

    &.active {
      color: white;
      background-color: variables.$primary-color;
      outline: 2px solid variables.$primary-color-accent;

      &.outline {
        color: white;
        background-color: variables.$default-color-active;
        outline: none;
      }
    }

    &.primary {
      background-color: variables.$primary-color;
      color: white;

      &.outline {
        background-color: transparent;
        outline: 2px solid variables.$primary-color;
        color: variables.$primary-color;
      }

      &:hover {
        background-color: variables.$primary-color-accent;

        &.outline {
          background-color: rgba(variables.$primary-color, 0.2);
          outline: 2px solid variables.$primary-color;
          color: variables.$primary-color-accent;
        }
      }

      &.active {
        background-color: variables.$primary-color-active;
        outline: 2px solid variables.$primary-color;

        &.outline {
          background-color: variables.$primary-color;
          outline: 2px solid variables.$primary-color;
          color: white;
        }

        &:hover {
          background-color: variables.$primary-color-accent;
        }
      }
    }

    &.secondary {
      background-color: variables.$secondary-color;
      color: white;

      &.outline {
        background-color: transparent;
        outline: 2px solid variables.$secondary-color;
        color: variables.$secondary-color;
      }

      &:hover {
        background-color: variables.$secondary-color-accent;

        &.outline {
          background-color: rgba(variables.$secondary-color, 0.2);
          outline: 2px solid variables.$secondary-color;
          color: variables.$secondary-color-accent;
        }
      }

      &.active {
        background-color: variables.$secondary-color-active;
        outline: 2px solid variables.$secondary-color;

        &.outline {
          background-color: variables.$secondary-color;
          outline: 2px solid variables.$secondary-color;
          color: white;
        }

        &:hover {
          background-color: variables.$secondary-color-accent;
        }
      }
    }

    &.success {
      background-color: variables.$success-color;
      color: white;

      &.outline {
        background-color: transparent;
        outline: 2px solid variables.$success-color;
        color: variables.$success-color;
      }

      &:hover {
        background-color: variables.$success-color-accent;

        &.outline {
          background-color: rgba(variables.$success-color, 0.2);
          outline: 2px solid variables.$success-color;
          color: variables.$success-color-accent;
        }
      }

      &.active {
        background-color: variables.$success-color-active;
        outline: 2px solid variables.$success-color;

        &.outline {
          background-color: variables.$success-color;
          outline: 2px solid variables.$success-color;
          color: white;
        }

        &:hover {
          background-color: variables.$success-color-accent;
        }
      }
    }

    &.warning {
      background-color: variables.$warning-color;
      color: white;

      &.outline {
        background-color: transparent;
        outline: 2px solid variables.$warning-color;
        color: variables.$warning-color;
      }

      &:hover {
        background-color: variables.$warning-color-accent;

        &.outline {
          background-color: rgba(variables.$warning-color, 0.2);
          outline: 2px solid variables.$warning-color;
          color: variables.$warning-color-accent;
        }
      }

      &.active {
        background-color: variables.$warning-color-active;
        outline: 2px solid variables.$warning-color;

        &.outline {
          background-color: variables.$warning-color;
          outline: 2px solid variables.$warning-color;
          color: white;
        }

        &:hover {
          background-color: variables.$warning-color-accent;
        }
      }
    }

    &.danger {
      background-color: variables.$danger-color;
      color: white;

      &.outline {
        background-color: transparent;
        outline: 2px solid variables.$danger-color;
        color: variables.$danger-color;
      }

      &:hover {
        background-color: variables.$danger-color-accent;

        &.outline {
          background-color: rgba(variables.$danger-color, 0.2);
          outline: 2px solid variables.$danger-color;
          color: variables.$danger-color-accent;
        }
      }

      &.active {
        background-color: variables.$danger-color-active;
        outline: 2px solid variables.$danger-color;

        &.outline {
          background-color: variables.$danger-color;
          outline: 2px solid variables.$danger-color;
          color: white;
        }

        &:hover {
          background-color: variables.$danger-color-accent;
        }
      }
    }

    &.outline {
      background-color: transparent;
      outline: 2px solid black;
    }

    .label {
      margin-left: 5px;
    }
  }
</style>
