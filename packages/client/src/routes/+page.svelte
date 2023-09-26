<script>
	import { browser } from '$app/environment';

	$: local = browser ? localStorage.getItem('tony') : 'no browser';
	let i = 0;
</script>

<h1>TG Webview exploration</h1>

<p>Local Storage: {local}</p>
<button
	on:click={() => {
		localStorage.setItem('tony', 'Gee' + i.toString());
		local = localStorage.getItem('tony');
		i++;
	}}>Set local storage</button
>
