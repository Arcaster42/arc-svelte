<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Table from './Table.svelte'

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Arc/Table',
    component: Table,
    tags: ['autodocs'],
    argTypes: {}
  })

  const items = [
    { firstCol: 'First Column', secondCol: 'Second Column' },
    { firstCol: 'First Column', secondCol: 'Second Column' },
    { firstCol: 'First Column', secondCol: 'Second Column' },
    { firstCol: 'First Column', secondCol: 'Second Column' }
  ]
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ items }} />
