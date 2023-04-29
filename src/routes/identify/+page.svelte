<script lang="ts">
    import type { PageData } from './$types';
    import recycleImg from '$lib/assets/recycle.png';
    
    export let data: PageData;

    let location: string;
    let recycleInput: string;
    let doTest = false;

    $: recycleInput && (doTest = !doTest);
</script>

<div class="shadow-xl bg-white w-full p-14">
    {#if location}
        <h1 class="text-2xl md:text-4xl mb-10">Find recycling information in {location}</h1>
    {/if}
    <div class="flex flex-col items-center lg:items-start lg:flex-row gap-10 justify-between px-20">
        <div class="w-96 text-center">
            <div class="mb-2 rounded-md bg-[#8ec543]/50 p-2 inline-block font-thin text-2xl">
                <h2>Material</h2>
                </div>
            <ul class="text-lg text-black/20">
                <li>Plastic</li> 
                <li class:text-black={doTest}>Glass</li> 
                <li>Paper</li> 
            </ul>
        </div>
        <div class="relative flex-shrink-0">
            <img class="w-60" alt="Recycle" src={recycleImg}>     
            <!-- TODO: Strip leading zeros, non-numeric            -->
            <input bind:value={recycleInput} placeholder="#" type="text" maxlength="2" class="placeholder-black/20 border-b-4 border-black absolute top-[26%] left-[42%] font-bold text-6xl w-12 rounded-t-full text-center outline-none">
        </div>
        <div class="w-96 text-center">
            <div class="mb-2 rounded-md bg-[#8ec543]/50 py-2 px-4 inline-block font-thin text-2xl">
                <h2>Compounds</h2>
                </div>
            <ul class="text-lg text-black/20">
            </ul>
        </div>
    </div>    
</div>
<div class="flex flex-col lg:flex-row gap-10 p-10">
    <img alt="Plastic" class="max-w-full lg:max-w-[50%] rounded-md" src="https://www.tasteofhome.com/wp-content/uploads/2022/05/coca-cola-attached-caps-courtesy-coca-cola.jpg?resize=1536,1024">
    <div>
        <p class="max-w-lg">The new Coke Zero formula tastes as if it has too much carbonation. In tasting a new bottle, the new formula burned my taste buds and left my tongue hurting for days. Anything I tried to eat or drink caused great pain! Terribly disappointed in Coke!</p>
        <br>
        <p>Coke...how could you do this to us Coke brand lovers AGAIN? You'd think you learned a lesson previously. Nope. The new red label Coke Zero Sugar is disgusting. I'll buy up all the black label I can. You had a winner but had to change it? Why? So unhappy.
        </p>
        <br>
        <p>
            The new Coke Zero is awful. The original version was very good, I hope Coke makes the original formula available again. Pepsi Zero is much better than the terrible new Coke Zero formula. I will buy Pepsi Zero if the original version of Coke Zero is not sold.
        </p>
    </div>
</div>