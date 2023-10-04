<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	const navbarItems = [
		{ id: 1, title: 'Top 7 Tips before you apply', link: 'https://www.google.com/' },
		{ id: 2, title: 'How is the winner selected?', link: 'https://www.google.com/' },
		{ id: 1, title: 'Apply for the scholarship!', link: 'https://www.google.com/' },
		{ id: 1, title: 'Read all our articles!', link: '/posts' }
	];
</script>

<div class="app">
	<div class="drawer w-full">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="flex justify-center bg-primary">
				<div class="max-w-6xl navbar">
					<div class="flex-none">
						<label for="my-drawer-3" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="flex-1 px-2 mx-2 text-4xl font-black text-white"><a href="/">nhk</a></div>
					<div class="flex-none hidden lg:block">
						<ul class="menu menu-horizontal text-white">
							{#each navbarItems as navbarItem}
								<li><a href={navbarItem.link} class="hover:text-white">{navbarItem.title}</a></li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			<slot />
			<Footer />
		</div>
		<!-- Sidebar -->
		<div class="drawer-side">
			<label for="my-drawer-3" class="drawer-overlay" />
			<ul class="menu p-4 w-80 min-h-full bg-white">
				<div class="flex justify-between items-center h-16">
					<h2 class="text-secondary text-xl font-bold">Menu</h2>
					<div class="flex w-1/3 justify-between">
						<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					/></svg
				></a
			>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					/></svg
				></a
			>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					/></svg
				></a>
					</div>
				</div>
				<li class="mt-4">
					<a href={navbarItems[0].link} class="bg-secondary text-white px-4 py-3">{navbarItems[0].title}</a>
				</li>
				<li class="mt-4">
					<a href={navbarItems[1].link} class="bg-secondary text-white px-4 py-3">{navbarItems[1].title}</a>
				</li>
				<li class="mt-4">
					<a href={navbarItems[2].link} class="bg-primary text-white px-4 py-3 font-bold">{navbarItems[2].title}</a>
				</li>
				<li class="mt-4">
					<a href={navbarItems[3].link} class="bg-white border-2 border-secondary text-secondary font-medium px-4 py-3">{navbarItems[3].title}</a>
				</li>
			</ul>
		</div>
	</div>
</div>
