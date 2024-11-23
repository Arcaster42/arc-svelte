<script lang="ts">
	let {
		type,
		title,
		value = $bindable(),
		validations
	}: {
		type: 'text' | 'password';
		title: string;
		value: string;
		validations?: ((val: string) => true | string)[];
	} = $props();

	let focused = $state(false);
	let error = $state<string | null>(null);
	$effect(() => {
		if (validations && value) validate();
	});

	function validate() {
		if (!validations) return;
		error = null;
		for (const validator of validations) {
			const errorVal = validator(value);
			if (typeof errorVal === 'string') {
				error = errorVal;
				break;
			}
		}
	}
</script>

<div class="container">
	<span class="title" class:focused>{title}</span>
	<input
		class="input"
		bind:value
		{type}
		onfocus={() => (focused = true)}
		onfocusout={() => (focused = !!value || false)}
		onchange={() => validate()}
	/>
	{#if { error }}
		<span class="error">{error}</span>
	{/if}
</div>

<style scoped>.container {
  position: relative;
  display: inline-block;
}

.title {
  position: absolute;
  font-size: large;
  font-weight: 300;
  top: 50%;
  left: 50px;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}
.title.focused {
  font-size: small;
  font-weight: 100;
  top: 10px;
  left: 25px;
  transform: translate(-50%, -50%);
}

.input {
  height: 40px;
  width: 300px;
  font-size: large;
  border: none;
  border-radius: 5px;
  background-color: rgb(244, 242, 242);
  border-bottom: 1px solid black;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
}
.input:hover {
  background-color: rgb(225, 225, 225);
}

.error {
  position: absolute;
  color: red;
  bottom: -30px;
  left: 60px;
  transform: translate(-50%, -50%);
}</style>
