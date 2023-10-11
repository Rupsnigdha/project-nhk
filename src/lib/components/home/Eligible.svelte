<script>
	import {gsap}  from "gsap";
	import { onMount } from "svelte";

	const eligibleTypes = [
		{ id: 1, name: 'entrepreneurs 💡' },
		{ id: 2, name: 'artists 🎨' },
		{ id: 3, name: 'science geeks 🧪' },
		{ id: 4, name: 'sportsperson ⚽' },
		{ id: 5, name: 'crafters 🧵' },
		{ id: 6, name: 'coders 🧑🏻‍💻' },
		{ id: 7, name: 'musicians 🎤' }
	];
	let eligibleContainer, eligibleLine;
	let eligibleTl = gsap.timeline();
	onMount(() => {
		let eligibleTypesAnimation = document.querySelectorAll(".eligible-types");
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					eligibleTl.fromTo(eligibleLine, {x: "-600px", opacity: 0}, {x: 0, opacity: 1, duration: 1});
					eligibleTl.fromTo(eligibleTypesAnimation[0], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					eligibleTl.fromTo(eligibleTypesAnimation[1], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					eligibleTl.fromTo(eligibleTypesAnimation[2], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					eligibleTl.fromTo(eligibleTypesAnimation[3], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					eligibleTl.fromTo(eligibleTypesAnimation[4], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					eligibleTl.fromTo(eligibleTypesAnimation[5], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					eligibleTl.fromTo(eligibleTypesAnimation[6], {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
					observer.unobserve(entry.target);
				}
			}, {
				threshold: 0.2
			})
		});
	observer.observe(eligibleContainer);
	});

</script>

<div class="flex flex-col items-center justify-center bg-primary" bind:this={eligibleContainer}>
	<div class="max-w-6xl py-12 pb-32 lg:pb-48">
		<div class="text-2xl font text-white px-4 mb-4 opacity-0" bind:this={eligibleLine}>
			the <span class="font-bold">nhk</span> scholarship is for
		</div>
		<div class="flex flex-wrap px-4 lg:w-[60%]">
			{#each eligibleTypes as type}
				<span class="bg-white mr-2 mb-2 px-2 py-1 text-lg font-semibold text-secondary rounded eligible-types"
					>{type.name}</span
				>
			{/each}
		</div>
		<div class="text-white px-4 lg:w-[50%]">
			and literally anyone and everyone who wants to thrive in their respective discipline(s),
			learn, experiment, try new things, fail, and try again.
		</div>
		<button
			class="btn text-white font-bold sbtn-xs border-none bg-secondary mt-4 sm:btn-sm md:btn-md hover:bg-white hover:text-secondary hover:border-secondary mx-4"
			>Learn More</button
		>
	</div>
</div>
