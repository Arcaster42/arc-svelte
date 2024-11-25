<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Button from './Button.svelte'

  const { Story } = defineMeta({
    title: 'Arc/Button',
    component: Button,
    tags: ['autodocs']
  })
</script>

<Story name="Primary" args={{ label: 'Button', color: 'primary' }} />
<Story
  name="Loading"
  args={{ label: 'Button', color: 'primary', loading: true }}
/>
<Story
  name="Icon"
  args={{
    label: 'Button',
    color: 'primary',
    loading: true,
    type: 'icon',
    icon: 'mdiArrowRight',
    textColor: 'white'
  }}
/>
