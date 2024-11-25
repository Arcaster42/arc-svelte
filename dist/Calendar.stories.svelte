<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Calendar from './Calendar.svelte'

  const { Story } = defineMeta({
    title: 'Arc/Calendar',
    component: Calendar,
    tags: ['autodocs']
  })
</script>

<Story
  name="Primary"
  args={{
    type: 'monthly',
    plans: [
      {
        startDate: '25/09/2024',
        startTime: '09:00',
        endTime: '10:00',
        title: '病院に行く'
      },
      {
        startDate: '27/09/2024',
        startTime: '00:00',
        endTime: '11:00',
        title: '歯医者'
      },
      {
        startDate: '27/09/2024',
        startTime: '13:00',
        endTime: '14:00',
        title: '面談'
      },
      {
        startDate: '28/09/2024',
        endDate: '30/09/2024',
        allDay: true,
        title: '旅行'
      }
    ]
  }}
/>
