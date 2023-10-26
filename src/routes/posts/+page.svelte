<script>
	export let data;
</script>

<svelte:head>
	<title>Project Naharkatia | Posts</title>
	<meta
		name="description"
		content="These are some of the many blogs written by Project Naharkatia in an effort to guide you in your quest to success."
	/>
</svelte:head>

<div class="flex flex-col items-center">
	<div class="w-full text-center text-4xl font-bold uppercase pt-12 pb-6">articles</div>
	<div class="grid md:grid-cols-2 gap-8 px-8 my-6 max-w-6xl">
		{#each data.posts as post}
			<div class="card w-[100%] min-w-96 bg-base-100 shadow-xl cursor-pointer" onclick={`location.href = '/posts/${post.slug}';`}>
				<figure><img src={`/images/blogs/${post.slug}.webp`} alt="Shoes" height="1080" width="1920" /></figure>
				<div class="card-body p-8 gap-1">
					<h2 class="card-title"><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
					<p class="">Published on {post.date}</p>
					<p class="mt-2">{post.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
