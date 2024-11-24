<script lang="ts">
  import type { InputType } from './types.ts'

  let {
    type = 'text',
    title,
    value = $bindable(),
    validations,
    style,
    width = '200px',
    minInlineSize = '200px',
    fitContent,
    minTime,
    maxTime,
    increments = ['00', '30']
  }: {
    type: InputType
    title?: string
    value: string
    validations?: ((val: string) => true | string)[]
    style?: string
    width?: string
    minInlineSize?: string
    fitContent?: boolean
    minTime?: string
    maxTime?: string
    increments?: ('00' | '15' | '30' | '45')[]
  } = $props()

  let focused = $state(false)
  let error = $state<string | null>(null)
  $effect(() => {
    if (validations && value) validate()
  })

  function validate() {
    if (!validations) return
    error = null
    for (const validator of validations) {
      const errorVal = validator(value)
      if (typeof errorVal === 'string') {
        error = errorVal
        break
      }
    }
  }
</script>

<div class="container">
  {#if title}<span class="title" class:focused>{title}</span>{/if}
  <input
    class="input"
    bind:value
    {type}
    onfocus={() => (focused = true)}
    onfocusout={() => (focused = !!value || false)}
    onchange={() => validate()}
    {style}
    style:min-inline-size={minInlineSize}
    style:width={fitContent ? '' : width}
    style:field-sizing={fitContent ? 'content' : 'fixed'}
    style:height={type === 'time' ? 'auto' : '40px'}
    placeholder={type === 'time' ? 'HH:MM' : ''}
    min={minTime}
    max={maxTime}
    list={type === 'time' ? 'times' : ''}
  />
  {#if type === 'time'}
    <datalist id="times">
      {#each Array.from({ length: 24 }, (_, i) => i) as hour}
        {#each increments as minute}
          <option value={`${hour}:${minute}`}></option>
        {/each}
      {/each}
    </datalist>
  {/if}
  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style lang="scss" scoped>
  .container {
    position: relative;
    display: inline-block;
  }

  .title {
    position: absolute;
    font-size: large;
    font-weight: 300;
    top: 50%;
    left: 10%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;

    &.focused {
      font-size: small;
      font-weight: 100;
      top: 10px;
      left: 10%;
      transform: translate(-50%, -50%);
    }
  }

  .input {
    height: 40px;
    font-size: large;
    border: none;
    border-radius: 5px;
    background-color: rgb(244, 242, 242);
    border-bottom: 1px solid black;
    padding-left: 10px;
    padding-top: 10px;
    outline: none;

    &:hover {
      background-color: rgb(225, 225, 225);
    }
  }

  .error {
    position: absolute;
    color: red;
    bottom: -30px;
    left: 60px;
    transform: translate(-50%, -50%);
  }
</style>
