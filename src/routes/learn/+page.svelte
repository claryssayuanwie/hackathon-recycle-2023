<script lang="ts">
  import vk1 from '$lib/assets/vk/1vk.png';
  import vk2 from '$lib/assets/vk/2vk.png';
  import vk3 from '$lib/assets/vk/3vk.png';
  import vk4 from '$lib/assets/vk/4vk.png';
  import vk5 from '$lib/assets/vk/5vk.png';
  import vk6 from '$lib/assets/vk/6vk.png';
  import vk7 from '$lib/assets/vk/7vk.png';
  
  import glass1 from '$lib/assets/glass/glass1.png';
  import glass2 from '$lib/assets/glass/glass2.png';
  import glass3 from '$lib/assets/glass/glass3.png';


  import paper1 from '$lib/assets/paper/paper1.png';
  import paper2 from '$lib/assets/paper/paper2.png';
  import paper3 from '$lib/assets/paper/paper3.png';

  import down from '$lib/assets/learnbg/down.png';
  import rightside from '$lib/assets/learnbg/rightside.png';

  let currentImages: string[];
  let currentTab: string;
  changePlastic();

  function changePlastic() {
    currentImages =  [vk1, vk2, vk3, vk4, vk5, vk6, vk7];
    currentTab = 'Plastic';
  }

  function changeGlass() {
    currentImages =  [glass1, glass2, glass3];
    currentTab = 'Glass';
  }

  function changePaper() {
    currentImages =  [paper1, paper2, paper3];
    currentTab = 'Paper';
  }
</script>

<div class="bg-gradient-to-t from-green-100 to-white to-50% lg:to-80%">
    <div class="flex gap-10 flex-col w-full min-h-full items-center p-10">
        <h1 class="font-bold text-4xl">Learn about recycling codes!</h1>
        <ul class="flex gap-10 text-lg font-thin text-[#126a3a]">
            <li><button class:hoverable={currentTab !== 'Plastic'} class:selected={currentTab === 'Plastic'} on:click={changePlastic}>Plastic</button></li>
            <li><button class:hoverable={currentTab !== 'Glass'} class:selected={currentTab === 'Glass'} on:click={changeGlass}>Glass</button></li>
            <li><button class:hoverable={currentTab !== 'Paper'} class:selected={currentTab === 'Paper'} on:click={changePaper}>Paper</button></li>
        </ul>
        <div class="flex flex-row flex-wrap px-20 justify-between gap-10">
            {#each currentImages as image}
                <div class="col-4">
                <img alt="Card" class="w-80" src={image}/>
                </div>
            {/each}
        </div>
    </div>
    <img alt="Bottom" src={down} class="w-full">
</div>

<style>
    .selected {
        padding-bottom: 0.25rem;
        border-bottom-color: #126a3a;
        border-bottom-width: 2px;
    }

    .hoverable:hover {
        opacity: 80%;
    }
</style>

