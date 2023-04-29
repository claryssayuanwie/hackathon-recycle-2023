<script lang="ts">
    import logo from '$lib/assets/logo.png';

    export let current: string = '';
</script>

<div class="relative flex py-8 pl-10 pr-12 md:pr-24 items-center justify-center gap-5 md:gap-10 bg-white w-full">
    <div class="md:absolute left-10 my-5 flex-shrink-0">
        <a href="/"><img alt="Logo" src={logo} class="h-10"></a>
    </div>
    <div class="md:ml-10">
        <ul class="flex flex-row gap-5 md:gap-14 text-md md:text-lg font-thin">
            <li class="w-12"><a class:font-normal={current === 'Home'} href="/">Home</a></li>
            <li class="w-12"><a class:font-normal={current === 'Identify'} href="/identify">Identify</a></li>
            <li class="w-12"><a class:font-normal={current === 'Learn'} href="/learn">Learn</a></li>
        </ul>
    </div>
</div>

<style>
    a:hover {
        font-weight: normal;
    }
</style>