<script lang="ts">
    import type { LayoutData } from './$types';
    import { page } from '$app/stores';
    import Header from '../components/Header.svelte';
    import '../app.css';
    
    export let data: LayoutData;
</script>

<svelte:head>
    <title>Recyclifi - {$page.data.title ?? ''}</title>
</svelte:head>

<Header  current={$page.data.title} />
<slot />