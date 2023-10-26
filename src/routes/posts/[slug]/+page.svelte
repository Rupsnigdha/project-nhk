<script>
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description}/>
</svelte:head>

<div class="flex justify-center">
	<article class="max-w-6xl px-4 my-4 lg:my-8">
		<hgroup>
			<h1 class="text-2xl lg:text-4xl font-bold mb-4 lg:mb-4">{data.meta.title}</h1>
			<div class="w-full">
				<img src={`/images/blogs/${data.slug}.webp`} alt="" height="1080" width="1920" />
			</div>
			<p class="text-xs font-bold italic my-2">Published on {data.meta.date}</p>
		</hgroup>
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
