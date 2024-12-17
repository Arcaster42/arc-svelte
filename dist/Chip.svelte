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

<style scoped>.chip {
  display: inline-block;
  padding: 5px 10px 5px 10px;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  vertical-align: middle;
  border: none;
  transition: all 0.2s ease-in-out;
  background-color: #c4c4c4;
}
.chip:hover {
  background-color: #b5b5b5;
}
.chip:hover.outline {
  background-color: rgba(196, 196, 196, 0.2);
}
.chip.active {
  color: white;
  background-color: #3498db;
  outline: 2px solid #3286be;
}
.chip.active.outline {
  color: white;
  background-color: #8f8f8f;
  outline: none;
}
.chip.primary {
  background-color: #3498db;
  color: white;
}
.chip.primary.outline {
  background-color: transparent;
  outline: 2px solid #3498db;
  color: #3498db;
}
.chip.primary:hover {
  background-color: #3286be;
}
.chip.primary:hover.outline {
  background-color: rgba(52, 152, 219, 0.2);
  outline: 2px solid #3498db;
  color: #3286be;
}
.chip.primary.active {
  background-color: #2a72a3;
  outline: 2px solid #3498db;
}
.chip.primary.active.outline {
  background-color: #3498db;
  outline: 2px solid #3498db;
  color: white;
}
.chip.primary.active:hover {
  background-color: #3286be;
}
.chip.secondary {
  background-color: #8e8f8f;
  color: white;
}
.chip.secondary.outline {
  background-color: transparent;
  outline: 2px solid #8e8f8f;
  color: #8e8f8f;
}
.chip.secondary:hover {
  background-color: #b1d6e5;
}
.chip.secondary:hover.outline {
  background-color: rgba(142, 143, 143, 0.2);
  outline: 2px solid #8e8f8f;
  color: #b1d6e5;
}
.chip.secondary.active {
  background-color: #8cc3d9;
  outline: 2px solid #8e8f8f;
}
.chip.secondary.active.outline {
  background-color: #8e8f8f;
  outline: 2px solid #8e8f8f;
  color: white;
}
.chip.secondary.active:hover {
  background-color: #b1d6e5;
}
.chip.success {
  background-color: #1abc9c;
  color: white;
}
.chip.success.outline {
  background-color: transparent;
  outline: 2px solid #1abc9c;
  color: #1abc9c;
}
.chip.success:hover {
  background-color: #17a085;
}
.chip.success:hover.outline {
  background-color: rgba(26, 188, 156, 0.2);
  outline: 2px solid #1abc9c;
  color: #17a085;
}
.chip.success.active {
  background-color: #14866d;
  outline: 2px solid #1abc9c;
}
.chip.success.active.outline {
  background-color: #1abc9c;
  outline: 2px solid #1abc9c;
  color: white;
}
.chip.success.active:hover {
  background-color: #17a085;
}
.chip.warning {
  background-color: #e5c544;
  color: white;
}
.chip.warning.outline {
  background-color: transparent;
  outline: 2px solid #e5c544;
  color: #e5c544;
}
.chip.warning:hover {
  background-color: #d9b43b;
}
.chip.warning:hover.outline {
  background-color: rgba(229, 197, 68, 0.2);
  outline: 2px solid #e5c544;
  color: #d9b43b;
}
.chip.warning.active {
  background-color: #cda22f;
  outline: 2px solid #e5c544;
}
.chip.warning.active.outline {
  background-color: #e5c544;
  outline: 2px solid #e5c544;
  color: white;
}
.chip.warning.active:hover {
  background-color: #d9b43b;
}
.chip.danger {
  background-color: #e32a2a;
  color: white;
}
.chip.danger.outline {
  background-color: transparent;
  outline: 2px solid #e32a2a;
  color: #e32a2a;
}
.chip.danger:hover {
  background-color: #d32626;
}
.chip.danger:hover.outline {
  background-color: rgba(227, 42, 42, 0.2);
  outline: 2px solid #e32a2a;
  color: #d32626;
}
.chip.danger.active {
  background-color: #c42222;
  outline: 2px solid #e32a2a;
}
.chip.danger.active.outline {
  background-color: #e32a2a;
  outline: 2px solid #e32a2a;
  color: white;
}
.chip.danger.active:hover {
  background-color: #d32626;
}
.chip.outline {
  background-color: transparent;
  outline: 2px solid black;
}
.chip .label {
  margin-left: 5px;
}</style>
