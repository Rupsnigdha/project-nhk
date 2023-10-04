<script>
	const faqData = [
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
				'The Naharkatia Scholarship is for anyone and everyone who’re doing great things and need help scale their ideas and ambitions. Click here to know if you qualify for the scholarship.'
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
				'Absolutely. If you want to sponsor a month’s scholarship or more, feel free to click here. How will the sponsorship work, you ask? We’ll add your name/company’s name as the title sponsor. For eg. “DS Chat House – The Naharkatia Scholarship – September 2022”.'
		}
	];
</script>

<div class="collapse collapse-plus">
	<input type="radio" name="my-accordion-3" />
	<div class="collapse-title font-semibold lg:text-lg px-4">Where is the money coming from?</div>
	<div class="collapse-content px-4">
		<p class="text-sm lg:text-base">
			We’ve been saving. Every month, we’ll also approach several businessmen and people of interest
			within Naharkatia to see if they’d like to contribute to the cause. Complete details regarding
			our funds, how we collect them, and how they are distributed can be found here.
		</p>
	</div>
</div>
{#each faqData as faq}
	<div class="collapse collapse-plus">
		<input type="radio" name="my-accordion-3" />
		<div class="collapse-title font-medium px-4">
			{faq.question}
		</div>
		<div class="collapse-content px-4">
			<p class="text-sm">{faq.answer}</p>
		</div>
	</div>
{/each}
