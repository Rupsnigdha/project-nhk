<script lang="ts">
	let count = 50000;

	function sleep(ms: Number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	async function increase() {
		await sleep(500);
		count = 0;
		while (count < 45000) {
			count = count + 1234;
			await sleep(10 + (count / 45000) * 10);
		}
		count = 50000;
	}
	increase();
</script>

<div class="flex justify-center">
	<div class="max-w-6xl flex flex-col items-center py-12">
		<p class="font-medium pb-4 text-xl text-center px-2 hero-text">
			As a first step, we're giving out
		</p>
		<p class="text-6xl font-black text-primary justify-center px-2 hero-text">
			{count.toLocaleString()}
		</p>
		<p class="font-medium py-4 text-xl text-center px-2">
			every once in a while to one special talent from our town
		</p>
		<button
			class="btn bg-accent text-white font-bold sbtn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-white hover:text-secondary hover:border-secondary"
			>Season 2 coming soon!</button
		>
	</div>
</div>
