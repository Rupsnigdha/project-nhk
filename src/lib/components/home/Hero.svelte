<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import HeroDesktop from '$lib/images/hero-desktop.png?w=400&format=avif';
	import HeroMobile from '$lib/images/hero-mobile.webp?w=400&format=avif';

	let heroFirstLine, heroSecondLine, heroThirdLine, heroFourthLine, heroContainer;
	let heroTl = gsap.timeline();
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					heroTl.fromTo(
						heroFirstLine,
						{ y: '25px', opacity: 0 },
						{ y: '0px', opacity: 1, duration: 0.5 }
					);
					heroTl.fromTo(
						heroSecondLine,
						{ y: '25px', opacity: 0 },
						{ y: '0px', opacity: 1, duration: 0.5 }
					);
					heroTl.fromTo(
						heroThirdLine,
						{ y: '25px', opacity: 0 },
						{ y: '0px', opacity: 1, duration: 0.5 }
					);
					heroTl.fromTo(
						heroFourthLine,
						{ y: '25px', opacity: 0 },
						{ y: '0px', opacity: 1, duration: 0.5 }
					);
					observer.unobserve(entry.target);
				}
			});
		});
		observer.observe(heroContainer);
	});
</script>

<div class="bg-gradient-to-b from-[#EF233C] to-[#FAA307] rounded-b-[64px] relative -z-20">
	<div class="rounded-b-[64px] flex justify-center">
		<div>
			<img
				src={HeroMobile}
				alt="Hero header"
				class="absolute -z-10 object-fill h-full right-0 rounded-b-[64px] sm:hidden"
				width="400"
			/>
			<img
				src={HeroDesktop}
				alt="Hero header"
				class="absolute -z-10 object-fill h-full right-0 rounded-b-[64px] max-sm:hidden"
				width="400"
			/>
		</div>
		<div
			class="flex flex-col gap-4 md:gap-6 justify-center py-20 md:py-32 pl-4 pr-12 lg:pl-0 lg:pr-0 max-w-6xl"
			bind:this={heroContainer}
		>
			<div
				class="bg-white self-start px-4 py-2 font-medium rounded-lg opacity-0"
				bind:this={heroFirstLine}
			>
				Hi there! 😍
			</div>
			<div
				class="bg-white self-start px-4 py-2 font-medium rounded-lg opacity-0"
				bind:this={heroSecondLine}
			>
				Yes, you! 😁
			</div>
			<div
				class="bg-white self-start px-4 py-2 font-medium rounded-lg opacity-0"
				bind:this={heroThirdLine}
			>
				<div>Welcome to</div>
				<div class="font-bold">Project Naharkatia! 🤩</div>
			</div>
			<div
				class="bg-white self-start px-4 py-2 font-medium rounded-lg max-w-2xl opacity-0"
				bind:this={heroFourthLine}
			>
				We work towards the development of our town by bringing new ideas, promoting talents, and
				helping businesses thrive.
			</div>
		</div>
	</div>
</div>
