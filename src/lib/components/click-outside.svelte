<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { useClickOutside } from 'svelteuse/action';

	let element: HTMLElement;
	const dispatch = createEventDispatcher();
	const handleOnTrigger = () => dispatch('trigger');

	onMount(() => {
		useClickOutside(element);
		element.addEventListener('trigger', handleOnTrigger);
	});

	onDestroy(() => {
		if (element) element.removeEventListener('trigger', handleOnTrigger);
	});
</script>

<div bind:this={element}>
	<slot />
</div>
