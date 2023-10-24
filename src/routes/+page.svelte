<script>
	import First from '$lib/components/home/First.svelte';
	import Eligible from '$lib/components/home/Eligible.svelte';
	import NotJustMoney from '$lib/components/home/NotJustMoney.svelte';
	import FaqSection from '$lib/components/home/FaqSection.svelte';
	import BecomeADonor from '$lib/components/home/BecomeADonor.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
</script>

<svelte:head>
	<title>Project Naharkatia Scholarship</title>
	<meta
		name="description"
		content="The NHK Scholarship by Project Naharkatia awards one special talent from the town with Rs. 50,000 and other valuable resources."
	/>
</svelte:head>

<section>
	<div class="flex justify-center bg-secondary px-4">
		<div class="container text-center text-sm text-white py-4 px-auto">
			First season winner announced! Find out - <a
				href="/winners"
				class="font-bold text-primary pl-1"
			>
				Click Here!</a
			>
		</div>
	</div>
	<Hero />
	<First />
	<Eligible />
	<NotJustMoney />
	<FaqSection />
	<BecomeADonor />
</section>

<style>
</style>
