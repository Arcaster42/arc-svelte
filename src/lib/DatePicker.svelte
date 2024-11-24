<script lang="ts">
  import { onMount } from 'svelte'
  import Button from './Button.svelte'

  let {
    start = $bindable(),
    end = $bindable(),
    showYear,
    allowRange
  }: {
    start?: Date
    end?: Date
    showYear?: boolean
    allowRange?: boolean
  } = $props()

  let currYear = $state(0)
  let selectedYear = $state(0)
  let currMonth = $state(0)
  let selectedMonth = $state(0)
  let currDay = $state(0)
  let selectedDay = $state(0)
  let startingDay = $state(0)
  let maxDays = $state(0)
  const date = new Date(Date.now())
  let rows: (number | null)[][] = $state([])

  onMount(() => {
    currYear = date.getFullYear()
    selectedYear = date.getFullYear()
    currMonth = date.getMonth()
    selectedMonth = date.getMonth()
    currDay = date.getDate()
    selectedDay = date.getDate()
    startingDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    maxDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    rows = Array.from({ length: 6 }, (_, i) => {
      const row = Array.from({ length: 7 }, (_, j) => {
        const day = i * 7 + j + 1 - startingDay
        return day > 0 && day <= maxDays ? day : null
      })
      return row
    })
  })

  function selectYear(year: number) {
    selectedYear = year
    selectMonth(selectedMonth)
  }

  function selectMonth(month: number) {
    if (month < 0) {
      selectedYear--
      month = 11
    } else if (month > 11) {
      selectedYear++
      month = 0
    }

    selectedMonth = month
    startingDay = new Date(selectedYear, month, 1).getDay()
    maxDays = new Date(selectedYear, month + 1, 0).getDate()

    rows = Array.from({ length: 6 }, (_, i) => {
      const row = Array.from({ length: 7 }, (_, j) => {
        const day = i * 7 + j + 1 - startingDay
        return day > 0 && day <= maxDays ? day : null
      })
      return row
    })
  }

  function selectDate(day: number) {
    if (!allowRange) {
      start = new Date(selectedYear, selectedMonth, day)
      return
    }
    if (!start) {
      start = new Date(selectedYear, selectedMonth, day)
    } else if (!end) {
      if (new Date(selectedYear, selectedMonth, day) < start) {
        end = start
        start = new Date(selectedYear, selectedMonth, day)
      } else {
        end = new Date(selectedYear, selectedMonth, day)
      }
    } else {
      start = new Date(selectedYear, selectedMonth, day)
      end = undefined
    }
  }
</script>

{#if rows.length}
  <div class="wrapper">
    <table>
      <thead>
        {#if showYear}
          <tr>
            <th>
              <Button
                type="icon"
                icon="mdiArrowLeft"
                size="small"
                onclick={() => selectYear(selectedYear - 1)}
              />
            </th>
            <th colspan="5">{selectedYear}</th>
            <th>
              <Button
                type="icon"
                icon="mdiArrowRight"
                size="small"
                onclick={() => selectYear(selectedYear + 1)}
              />
            </th>
          </tr>
        {/if}
        <tr>
          <th>
            <Button
              type="icon"
              icon="mdiArrowLeft"
              size="small"
              color="primary-dark"
              textColor="white"
              onclick={() => selectMonth(selectedMonth - 1)}
            />
          </th>
          <th colspan="5">
            {new Date(selectedYear, selectedMonth).toLocaleString('default', {
              month: 'long'
            })}
          </th>
          <th colspan="1">
            <Button
              type="icon"
              icon="mdiArrowRight"
              size="small"
              color="primary-dark"
              textColor="white"
              onclick={() => selectMonth(selectedMonth + 1)}
            />
          </th>
        </tr>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as row}
          <tr>
            {#each row as day}
              <td
                class="day"
                class:hoverable={day}
                class:current={day === selectedDay &&
                  selectedMonth === currMonth}
                class:selected={(day &&
                  start &&
                  new Date(selectedYear, selectedMonth, day).getTime() ===
                    start.getTime()) ||
                  (day &&
                    start &&
                    end &&
                    new Date(selectedYear, selectedMonth, day) >= start &&
                    new Date(selectedYear, selectedMonth, day) <= end)}
                onclick={() => {
                  if (day) selectDate(day)
                }}>{day}</td
              >
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<style lang="scss" scoped>
  @import '../style/variables';

  table {
    border-collapse: collapse;
    border: 3px solid $primary-color-dark;
  }

  th {
    text-align: center;
    background-color: $primary-color-dark;
    color: white;
    padding: 4px;
  }

  .day {
    text-align: center;
    padding: 4px;

    &.hoverable:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    &.current {
      color: red;
    }

    &.selected {
      background-color: rgba(17, 0, 255, 0.1);
    }
  }
</style>
