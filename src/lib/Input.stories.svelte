<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Input from './Input.svelte'

  const { Story } = defineMeta({
    title: 'Arc/Input',
    component: Input,
    tags: ['autodocs']
  })

  const validatePresence = (s: string) => s.length > 0 ? true : 'Required'
</script>

<Story name="Primary" args={{ title: 'Title' }} />
<Story name="Validation" args={{ title: 'Required', validations: [validatePresence] }} />
<Story name="Fit Content" args={{ title: 'Title', fitContent: true }} />
<Story name="Password" args={{ title: 'Password', type: 'password' }} />
<Story name="Time" args={{ type: 'time' }} />