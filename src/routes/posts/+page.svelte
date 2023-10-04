<script>
    export let data
</script>
<div class="flex flex-col items-center">
    <div class="w-full text-center text-4xl font-bold uppercase py-12">articles</div>
    <div class="grid md:grid-cols-2 gap-8 px-8 max-w-6xl">
        {#each data.posts as post}
        <div class="card w-[100%] min-w-96 bg-base-100 shadow-xl">
            <figure><img src={`/images/blogs/${post.slug}.jpg`} alt="Shoes" /></figure>
            <div class="card-body p-8 gap-1">
                <h2 class="card-title"><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
                <p class="">Published on {post.date}</p>
                <p class="mt-2">{post.description}</p>
            </div>
        </div>
        {/each}
    </div>
</div>