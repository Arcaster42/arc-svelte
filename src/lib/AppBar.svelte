<script lang="ts">
  import Menu from './Menu.svelte'

  const {
    color = 'primary',
    title,
    textColor = 'white',
    menuItems,
    routingItems
  }: {
    color?: 'primary' | 'secondary'
    title?: string
    textColor?: string
    iconColor?: string
    menuItems?: { label: string; path: string }[]
    routingItems?: { label: string; path: string }[]
  } = $props()
</script>

<div class={`wrapper ${color} ${textColor}`}>
  {#if menuItems}
    <Menu
      label="AppBar"
      items={menuItems}
      buttonType="icon"
      icon="mdiMenu"
      {textColor}
    />
  {/if}
  <span class="title" style={`color: ${textColor}`}>{title}</span>
  {#if routingItems}
    <div class="routing">
      {#each routingItems as item}
        <div class="route" style={`color: ${textColor}`}>{item.label}</div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss" scoped>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    display: flex;
    align-items: center;
    width: 1000px;
    background-color: variables.$primary-color;
    padding-left: 10px;

    .title {
      margin-left: 20px;
      margin-right: 20px;
      min-width: max-content;
      flex-grow: 1;
      font-size: x-large;
      font-family: Roboto;
      text-transform: uppercase;
    }

    .routing {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;

      .route {
        margin-left: 20px;
        font-size: large;
        border-bottom: 2px solid white;
        align-content: center;
        cursor: pointer;
        transition: ease-in-out 0.3s;

        &:hover {
          border-bottom: 2px solid blue;
        }
      }
    }
  }
</style>
