<script>
	import FaqComponent from './FaqComponent.svelte';
	import Faqs from '$lib/images/faqs.png?w=160&format=avif';
	import Scholarship from './Scholarship.svelte';
</script>

<div class="bg-secondary py-12 pb-0 text-white flex flex-col justify-center items-center">
	<div class="w-full max-w-6xl sm:px-4 flex flex-col items-center">
		<h2 class="text-xl font-avenir lg:text-2xl font-base tracking-wider mb-6">FAQs - Frequently Asked Questions</h2>
		<FaqComponent />
		<div class="w-40 my-8">
			<img src={Faqs} alt="FAQ questions" class="w-full" width="160" />
		</div>
		<Scholarship />
	</div>
</div>
