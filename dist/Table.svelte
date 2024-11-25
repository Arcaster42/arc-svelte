<script lang="ts">
  const {
    title,
    items,
    strings,
    center,
    left,
    striped,
    width = '80%'
  }: {
    title?: string
    items: any[]
    strings?: { [key: string]: string }
    center?: boolean
    left?: boolean
    striped?: boolean
    width?: string
  } = $props()
</script>

<table class="table" style={`width: ${width};`}>
  <thead class="head">
    <tr>
      {#each Object.keys(items[0]) as itemKey}
        <th class="header" class:left scope="col">
          {strings ? strings[itemKey] || itemKey : itemKey}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each items as item}
      <tr class="row" class:striped>
        {#each Object.values(item) as value}
          <td class="cell" class:center>{value}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style scoped>.table {
  border-collapse: collapse;
}
.table .head {
  border: 1px solid black;
}
.table .header {
  font-weight: bold;
  border-right: 1px solid black;
  background-color: lightblue;
}
.table .header.left {
  text-align: left;
}

.row {
  transition: all ease-in-out 0.2s;
}
.row .cell {
  border: 1px solid black;
}
.row .cell.center {
  text-align: center;
}
.row .cell:not(:last-child) {
  padding: 2px;
  border-right: 1px solid black;
}
.row:hover {
  background-color: rgba(75, 215, 196, 0.3) !important;
}

tr.striped:nth-of-type(even) {
  background-color: rgba(211, 211, 211, 0.4);
}</style>
