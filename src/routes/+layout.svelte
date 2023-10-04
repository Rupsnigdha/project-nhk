<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	const navbarItems = [
		{ id: 1, title: 'Top 7 Tips before you apply', link: 'https://www.google.com/' },
		{ id: 2, title: 'How is the winner selected?', link: 'https://www.google.com/' },
		{ id: 1, title: 'Apply for the scholarship!', link: 'https://www.google.com/' },
		{ id: 1, title: 'All blogs', link: '/posts' }
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
				{#each navbarItems as navbarItem}
					<li><a href={navbarItem.link} class="hover:text-white">{navbarItem.title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>
