<script lang="ts">
	import { browser } from '$app/environment';
    import recycleImg from '$lib/assets/recycle.png';

    let location: string;
    let recycleInput: string;

    const geoSuccess: PositionCallback = (position) => {
        location = position.coords.latitude + " " + position.coords.longitude;
        console.log(position);
    };

    const geoError: PositionErrorCallback = (error) => {
        console.error(error);
    };

    if (browser) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
</script>

<div class="flex flex-col gap-10  w-full justify-center items-center">
    <div class="shadow-xl flex flex-shrink-0 flex-col bg-white rounded-lg w-full items-center justify-center p-14">
        <div class="flex flex-col items-center justify-center">
            {#if location}
                <h1 class="text-3xl md:text-4xl mb-10">Find recycling information in {location}</h1>
            {/if}
            <div class="relative">
                <img class="w-56" alt="Recycle" src={recycleImg}>
                <!-- <h2 class="absolute top-[24%] left-[42%] font-bold text-7xl">{recycleInput ?? ''}</h2> -->
                <input type="text" maxlength="1" class="border-b-4 border-black absolute top-[30%] left-[42%] font-bold text-6xl w-12 rounded-t-full text-center outline-none">
            </div>
        </div>
        <!-- <input bind:value={recycleInput} type="text" maxlength="1" class="border rounded-md p-5 w-96" placeholder="Enter recycle label number"> -->
    </div>
    <div class="flex flex-col md:flex-row gap-10 p-10">
        <img alt="Plastic" class="w-full md:w-1/2 rounded-md" src="https://www.tasteofhome.com/wp-content/uploads/2022/05/coca-cola-attached-caps-courtesy-coca-cola.jpg?resize=1536,1024">
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
</div>