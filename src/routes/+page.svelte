<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';
	import { invoke } from '@tauri-apps/api/tauri';

	$effect(() => {
		if (appWindow.label === 'control') invoke('close_splash');
	});
</script>

<main></main>

<style lang="scss"></style>
