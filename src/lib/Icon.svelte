<script lang="ts">
  import { onMount } from 'svelte'
  import type { Size } from './types.js'

  const {
    icon,
    color = 'black',
    size = 'medium',
    width,
    height,
    center
  }: {
    icon: keyof typeof import('@mdi/js')
    color?: string
    size?: Size
    width?: string
    height?: string
    center?: boolean
  } = $props()

  let path = $state('')

  const sizeMap = {
    small: '15px',
    medium: '25px',
    large: '50px',
    larger: '75px'
  }

  async function getIcon() {
    const module = await import('@mdi/js')
    return module[icon]
  }

  onMount(async () => {
    path = await getIcon()
  })
</script>

<svg
  fill={color}
  width={width ? width : sizeMap[size]}
  height={height ? height : sizeMap[size]}
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
  class:center
>
  <path d={path}></path>
</svg>

<style lang="scss" scoped>
  svg {
    vertical-align: middle;
  }
</style>
