<script lang="ts">
	import type { PageData } from './$types';
	import missionImg from '$lib/assets/home-mission.png';

	export let data: PageData;
</script>

<div class="p-10 lg:px-56 lg:py-10 gap-10 flex flex-col lg:flex-row bg-white w-full h-full justify-between">
	<!-- Mission Statement -->
	<div class="">
		<h1 class="mb-4 text-5xl font-bold">
			Reinventing how we look at <span class="text-[#126a3a]">trash</span>
		</h1>
		<p>
			There are many different types of trash in the world but not everything can be recycled. But that also doesn’t mean we have to throw out what we can’t recycle!
		</p>
		<a href="/learn">
			<button class="bg-red mt-10 rounded-full bg-[#8ec543] py-2 px-4 hover:opacity-80">
				Learn More
			</button>
		</a>
	</div>
	<!-- Image -->
	<div class="flex-shrink-0 w-full lg:w-1/2">
		<img
			class="w-full"
			alt="About"
			src={missionImg}
		/>
	</div>
</div>