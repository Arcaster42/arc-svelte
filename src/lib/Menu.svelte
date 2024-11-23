<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import Button from './Button.svelte'
  import { slide } from 'svelte/transition'
  import type { ButtonType } from './types.ts'

  let {
    label,
    items,
    buttonType,
    icon,
    textColor
  }: {
    label: string
    items: { label: string; link?: string }[]
    buttonType?: ButtonType
    icon?: keyof typeof import('@mdi/js')
    textColor?: string
  } = $props()
  let menu: Element | undefined = $state(undefined)
  let buttonId: string = $state('')
  let showMenu = $state(false)

  function handleOutsideClick(e: MouseEvent) {
    const buttonRef = document.getElementById(buttonId)
    if (
      showMenu &&
      !buttonRef?.contains(e?.target as Node) &&
      !menu?.contains(e?.target as Node)
    ) {
      showMenu = false
    }
  }

  onMount(() => {
    const randomId = String(Math.floor(Math.random() * 100))
    buttonId = randomId
    document.addEventListener('click', handleOutsideClick)

    onDestroy(() => {
      document.removeEventListener('click', handleOutsideClick)
    })
  })

  onDestroy(() => {})
</script>

<div class="menu-wrapper">
  <Button
    {label}
    type={buttonType}
    {icon}
    size="large"
    color="primary"
    {textColor}
    onclick={() => (showMenu = !showMenu)}
    refId={buttonId}
  />
  {#if showMenu}
    <ul class="list" bind:this={menu} in:slide out:slide>
      {#each items as item}
        <li class="item">{item.label}</li>
        <div class="divider"></div>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss" scoped>
  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    box-shadow: 4px 2px 2px 2px rgba(0, 0, 0, 0.2);
    width: 200px;
    padding: 8px;

    .item {
      width: 100%;
      cursor: pointer;
      font-size: x-large;
      text-indent: 10px;

      &:hover {
        background-color: rgba(80, 80, 80, 0.157);
      }
    }

    .divider:not(:last-child) {
      outline: 1px solid rgba(0, 0, 0, 0.2);
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
</style>
