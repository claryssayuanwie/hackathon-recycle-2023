<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="p-10 gap-10 flex flex-col lg:flex-row bg-white w-full h-full justify-between">
	<!-- Mission Statement -->
	<div class="">
		<h1 class="mb-2 text-3xl font-thin underline decoration-slate-400/60">
			We Recycle What Others Don't
		</h1>
		<p>
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered
			alteration in some form, by injected humour, or randomised words which don't look even
			slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
			there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
			on the Internet tend to repeat predefined chunks as necessary, making this the first true
			generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
			handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
			generated Lorem Ipsum is therefore always free from repetition, injected humour, or
			non-characteristic words etc.
		</p>
		<button id="input">Discover</button>
	</div>
	<!-- Image -->
	<div class="flex-shrink-0 w-1/2">
		<img
			class="w-full"
			alt="About"
			src="https://c8.alamy.com/comp/ETN0WC/fitness-man-drinking-milk-isolated-on-a-white-background-ETN0WC.jpg"
		/>
	</div>
</div>