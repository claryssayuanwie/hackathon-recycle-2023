<script lang="ts">
	import type { PageData } from './$types';
	import missionImg from '$lib/assets/home-mission.png';
	import cornerImg from '$lib/assets/learnbg/home-corner.png';

	export let data: PageData;
</script>

<div class="p-10 lg:px-56 lg:py-10 gap-10 flex flex-col lg:flex-row bg-white w-full min-h-full justify-between">
	<!-- Mission Statement -->
	<div>
		<h1 class="mb-4 text-5xl font-bold">
			Reinventing how we look at <span class="text-[#126a3a]">trash</span>
		</h1>
		<p>
			There are many different types of trash in the world but not everything can be recycled. But that also doesn’t mean we have to throw out what we can’t recycle!
		</p>
		<a href="/learn">
			<button class="bg-red mt-10 rounded-full bg-[#8ec543] py-2 px-4 hover:opacity-80 font-thin">
				Learn More
			</button>
		</a>
	</div>
	<!-- Image -->
	<div class="flex-shrink-0 w-full lg:w-1/2">
		<img
			class="w-full rounded-md"
			alt="About"
			src={missionImg}
		/>
	</div>
</div>
<!-- <div class="lg:hidden bg-white min-w-full h-20"></div>
<div class="min-w-full bg-white">
	<img alt="Corner" src={cornerImg} class="w-56 lg:w-96">
</div> -->