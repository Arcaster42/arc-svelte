<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Modal from './Modal.svelte'

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Arc/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {}
  })
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ isOpen: true }}></Story>
