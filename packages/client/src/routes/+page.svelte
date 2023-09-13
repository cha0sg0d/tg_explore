<script>
	import { browser } from '$app/environment';

	$: local = browser ? localStorage.getItem('tony') : 'no browser';
</script>

<h1>TG Webview exploration</h1>

<p>Local Storage: {local}</p>
