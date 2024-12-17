<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import AppBar from './AppBar.svelte'

  const { Story } = defineMeta({
    title: 'Arc/AppBar',
    component: AppBar,
    tags: ['autodocs']
  })
</script>

<Story
  name="Menu"
  args={{
    title: 'App Title',
    color: 'primary',
    menuItems: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' }
    ]
  }}
/>

<Story
  name="No Menu"
  args={{
    title: 'App Title',
    color: 'primary'
  }}
/>

<Story
  name="Routing Buttons"
  args={{
    title: 'App Title',
    color: 'primary',
    routingItems: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' }
    ]
  }}
/>
