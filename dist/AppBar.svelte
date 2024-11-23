<script lang="ts">
	import Menu from './Menu.svelte';

	const {
		color = 'primary',
		title,
		textColor = 'white'
	}: {
		color?: 'primary' | 'secondary';
		title?: string;
		textColor?: string;
		iconColor?: string;
	} = $props();
	const menuItems = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }];
</script>

<div class={`wrapper ${color} ${textColor}`}>
	<Menu label="AppBar" items={menuItems} buttonType="icon" icon="mdiMenu" {textColor} />
	<span class="title" style={`color: ${textColor}`}>{title}</span>
</div>

<style scoped>.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
}
.wrapper.primary {
  background-color: #3498db;
}
.wrapper .title {
  font-size: x-large;
  font-family: Roboto;
  text-transform: uppercase;
}</style>
