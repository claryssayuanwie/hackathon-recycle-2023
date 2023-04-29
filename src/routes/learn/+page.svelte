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

  let currentImages;

  changePlastic();
  function changePlastic() {
    currentImages =  [vk1, vk2, vk3, vk4, vk5, vk6, vk7];
  }

  function changeGlass() {
    currentImages =  [glass1, glass2, glass3];
  }

  function changePaper() {
    currentImages =  [paper1, paper2, paper3];
  }
</script>


<hr class="new1" />


<div class="content">
  <!-- START OF PROFILE HEADER-------------------------------------------->
  <div class="container">
    <div class="row profileSection">
      <div class="col-8 infoSection">
        <center>
        <div>
          <h1><b><center>Learn about recycling codes!</center></b></h1>
        </div>
        <!-- TODO: Add profile account name here-->
        <div>
          <ul>
            <li class="cursor-pointer" on:click={changePlastic}> Plastic </li><li class="cursor-pointer" on:click={changeGlass}><a href="http://localhost:5173/learn"> Glass </a></li><li class="cursor-pointer" on:click={changePaper}><a href="http://localhost:5173/learn"> Paper </a></li>
          </ul>
        </div>
        </center>
      </div>
    </div>
  </div>
  <!-- END OF PROFILE HEADER....................................................................................-->


  <hr class="new2" />


  <!-- START OF POSTS GRID-------------------------------------------->
  <div class="container">

    <div class="grid-container">
    {#each currentImages as image}
        <div class="col-4">
          <img
            class="post"
            src={image}
          />
        </div>
    {/each}
  </div>
  <!-- END OF POSTS GRID-------------------------------------------->
  <div class="container">
    <img src={rightside} alt="top right border">
    <div class="topright"></div>
  </div>

  <div class="container">
    <img src={down} alt="bottom picture">
    <div class="bottom"></div>
  </div>


</div>
</div>

<style>

.content {
  width: 960px;
  margin: auto;
}

h1 {
  font-size: 40px;
}
.container {
    display: flex;
    flex-direction: column;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    border-radius: 50px;
    grid-gap: 10px;
    padding: 10px;
    align-content: center;
  }
  
  .grid-container > div {
    padding: 20px 0;
    place-items: center;
  }

.post {
  height: 250px;
  width: 250px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 50px;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: 250px 250px 250px;
  padding: 10px;
  border-radius: 50px;
}

ul li{
  display: inline;
}

.container {
  display: flex;
  flex-wrap: wrap;
}




</style>

