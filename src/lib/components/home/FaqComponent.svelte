<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';

	const faqData = [
		{
			id: 0,
			question: 'Where is the money coming from?',
			answer:
				'We have been saving! Every month, we will also approach several businessmen and people of interest within Naharkatia to see if they’d like to contribute to the cause. Complete details regarding our funds, how we collect them, and how they are distributed can be found <a href="posts/the-nhk-scholarship-about-our-funds">here.</a>'
		},
		{
			id: 1,
			question: 'Why only Naharkatia?',
			answer:
				'The people behind this initiative are from Naharkatia. And it’s time they did something for their town. That’s it. No other reason. 😄 We might expand to other nearby towns and cities soon.'
		},
		{
			id: 2,
			question: 'What happens after I get the scholarship?',
			answer:
				'Once you receive the scholarship, our team will work with you for the next three months to focus on your growth. We’ll help you with resources essential for your specific forte. We’ll make sure we do great things together.'
		},
		{
			id: 3,
			question: 'For how long will the scholarship program run?',
			answer:
				'We’re currently giving out the scholarship from our saved-up funds. We’ll try to keep the initiative running for years to come. To help us do that, you can donate to us by clicking here.'
		},
		{
			id: 4,
			question: 'Can anyone apply?',
			answer:
				'The Naharkatia Scholarship is for anyone and everyone who’re doing great things and need help scale their ideas and ambitions. <a href="posts/the-nhk-scholarship-who-is-it-for">Click here</a> to know if you qualify for the scholarship.'
		},
		{
			id: 5,
			question: 'How will I receive the money?',
			answer: 'The winner will receive the money in their bank account.'
		},
		{
			id: 6,
			question: 'Is there an office I can visit?',
			answer:
				'Currently, we’re working remotely. But if the initiative finds success, we’ll open up an office in Naharkatia. Let’s hope for the best.'
		},
		{
			id: 7,
			question: 'Can I be a Sponsor?',
			answer:
				'Absolutely. If you want to sponsor a month’s scholarship or more, feel free to <a href="/posts/donate-to-project-naharkatia">click here</a>. How will the sponsorship work, you ask? We’ll add your name/company’s name as the title sponsor. For eg. “DS Chat House – The Naharkatia Scholarship – September 2022”.'
		}
	];
</script>

<Accordion flush class="w-full px-4 md:px-0">
	{#each faqData as faq}
		<AccordionItem transitionParams={{ duration: 500 }}>
			<span slot="header" class="font-medium text-lg text-white w-full tracking-wide">{faq.question}</span>
			<div slot="arrowup">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1.25em"
					viewBox="0 0 448 512"
					class="fill-white"
					><path
						d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
					/></svg
				>
			</div>
			<span slot="arrowdown">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1.25em"
					viewBox="0 0 448 512"
					class="fill-white"
					><path
						d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
					/></svg
				>
			</span>
			<p class="mb-2 text-white w-full font-base tracking-wide leading-6 faq-ans">{@html faq.answer}</p>
		</AccordionItem>
	{/each}
</Accordion>
