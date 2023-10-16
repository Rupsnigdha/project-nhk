<script>
	export let data;
</script>

<svelte:head>
	<title>Project NHK Scholarship | Posts</title>
	<meta
		name="description"
		content="These are some of the many blogs written by Project Naharkatia in an effort to guide you in your quest to success."
	/>
</svelte:head>

<div class="flex flex-col items-center">
	<div class="w-full text-center text-4xl font-bold uppercase py-12">articles</div>
	<div class="grid md:grid-cols-2 gap-8 px-8 max-w-6xl">
		{#each data.posts as post}
			<div class="card w-[100%] min-w-96 bg-base-100 shadow-xl">
				<figure><img src={`/images/blogs/${post.slug}.png`} alt="Shoes" /></figure>
				<div class="card-body p-8 gap-1">
					<h2 class="card-title"><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
					<p class="">Published on {post.date}</p>
					<p class="mt-2">{post.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
