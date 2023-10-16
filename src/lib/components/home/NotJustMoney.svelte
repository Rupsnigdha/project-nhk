<script>
	import moneyImg from '$lib/images/money.png?w=400&format=avif';
</script>

<div class="relative flex h-[262px] sm:h-[200px] md:h-[217px] lg:h-[140px] justify-center">
	<div
		class="flex flex-col items-center justify-center bg-white rounded-xl p-12 mx-4 absolute top-[-50px] lg:top-[-100px]"
	>
		<div
			class="absolute top-[-75px] w-[150px] h-0 md:w-[20%] md:top-[-80px] lg:w-[25%] lg:top-[-100px] bg-blue-400"
		>
			<img src={moneyImg} alt="a representation of money" class="w-full" width="400" />
		</div>
		<div class="text-center text-3xl font-bold text-secondary mb-4">Not just money!</div>
		<p>
			We also provide you access to courses, mentors, workshops, tech facilities and equipments.
		</p>
		<div>
			<button
				class="btn bg-accent mt-4 text-white font-bold sbtn-xs sm:btn-sm md:btn-md hover:bg-white hover:text-secondary hover:border-secondary"
				onclick="window.location.href='/posts/the-nhk-scholarship-our-process'"
				>Know our process</button
			>
		</div>
	</div>
</div>
