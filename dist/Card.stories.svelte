<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Card from './Card.svelte'
  import DropZone from './DropZone.svelte'

  const { Story } = defineMeta({
    title: 'Arc/Card',
    component: Card,
    tags: ['autodocs']
  })

  let items: string[] = $state([])
</script>

<Story name="Primary" args={{}} />
<Story name="Draggable">
  <div>
    <Card draggable></Card>
  </div>
  <DropZone {items} />
</Story>
