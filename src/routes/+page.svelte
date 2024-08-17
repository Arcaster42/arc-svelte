<script lang="ts">
	import Input from '../components/Input.svelte';
	import Button from '../components/Button.svelte';
	import Card from '../components/Card.svelte';
	import Menu from '../components/Menu.svelte';
	import Icon from '../components/Icon.svelte';
	import AppBar from '../components/AppBar.svelte';

	let value = $state('');
	let validators = [
		(v: string) => v.length > 3 || 'Not long enough',
		(v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid e-mail'
	];
	const menuItems = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }];
</script>

{#snippet titleSnippet()}
	<h2>Card Title</h2>
{/snippet}
{#snippet subtitleSnippet()}
	<span>Subtitle Content</span>
{/snippet}
{#snippet actionsSnippet()}
	<Button label="Action 1" />
	<Button label="Action 2" />
{/snippet}

<!-- <AppBar title="App Bar" /> -->
<!-- <Input type="text" title="E-Mail" bind:value validations={validators} /> -->
<!-- <Button size="medium" icon="mdiAccountAlert" color="primary" textColor="white" /> -->
<!-- <Card {titleSnippet} {subtitleSnippet} {actionsSnippet} /> -->
<!-- <Menu label="Menu" items={menuItems} /> -->
<!-- <Icon icon="mdiAbTesting" color="blue" /> -->
