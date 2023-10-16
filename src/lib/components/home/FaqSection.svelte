<script>
	import FaqComponent from './FaqComponent.svelte';
	import Faqs from '$lib/images/faqs.png?w=160&format=avif';
	import Scholarship from './Scholarship.svelte';
</script>

<div class="bg-secondary py-12 pb-0 text-white flex flex-col justify-center items-center">
	<div class="max-w-6xl flex flex-col items-center">
		<h2 class="text-xl lg:text-2xl font-bold">FAQs - Frequently Asked Questions</h2>
		<FaqComponent />
		<div class="w-40 mb-8">
			<img src={Faqs} alt="" class="w-full" width="160"/>
		</div>
		<Scholarship />
	</div>
</div>
