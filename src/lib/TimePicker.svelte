<script lang="ts">
	const {
		value = $bindable(),
		increment = '30',
		min,
		max,
		bookedTimes
	}: {
		value: string;
		increment?: '15' | '30' | '60';
		min?: string;
		max?: string;
		bookedTimes?: string[];
	} = $props();

	function getIncrements() {
		if (increment === '15') return ['00', '15', '30', '45'];
		if (increment === '30') return ['00', '30'];
		return ['00'];
	}
</script>

<input type="time" list="times" {value} {min} {max} />
<datalist id="times">
	{#each Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')) as hour}
		{#each getIncrements() as minute}
			{#if bookedTimes?.includes(`${hour}:${minute}`)}
				<option value={`${hour}:${minute}`} disabled></option>
			{:else}
				<option value={`${hour}:${minute}`}></option>
			{/if}
		{/each}
	{/each}
</datalist>
