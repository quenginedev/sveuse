<script>
	import { useClickOutside } from 'svelteuse/action';
	import { ClickOutside } from 'svelteuse/components';
</script>

<h1 use:useClickOutside >Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<img src="http://asdasd"/>
<ClickOutside
	on:trigger={() => {
		console.log('hello');
	}}
>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, molestias possimus id voluptate
	facere aliquid delectus ex sit dolorum nostrum omnis! Eaque ducimus facere sunt amet! Neque
	corrupti delectus facere.
</ClickOutside>
