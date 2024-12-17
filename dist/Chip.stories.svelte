<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Chip from './Chip.svelte'

  const { Story } = defineMeta({
    title: 'Arc/Chip',
    component: Chip,
    tags: ['autodocs']
  })
</script>

<Story name="Default" args={{ label: 'chip', active: false }} />

<Story
  name="Primary"
  args={{ label: 'chip', color: 'primary', active: false }}
/>

<Story
  name="Outline"
  args={{ label: 'outline', outline: true, active: false }}
/>
