<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Progress from './Progress.svelte'

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Arc/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {}
  })
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ progress: 20 }}></Story>
<Story name="Label" args={{ progress: 67, showProgress: true }}></Story>
