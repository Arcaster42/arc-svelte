<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import DatePicker from './DatePicker.svelte'

  const { Story } = defineMeta({
    title: 'Arc/DatePicker',
    component: DatePicker,
    tags: ['autodocs']
  })
</script>

<Story name="Primary" args={{ label: 'DatePicker', color: 'primary' }} />
<Story name="Range" args={{ label: 'DatePicker', color: 'primary', allowRange: true }} />
