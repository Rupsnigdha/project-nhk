<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	const navbarItems = [
		{ id: 0, title: 'Home', link: '/' },
		{ id: 1, title: 'Top 7 Tips before you apply', link: '/posts/top-7-tips-before-you-apply' },
		{ id: 2, title: 'Check out the winners here', link: '/winners' },
		{
			id: 3,
			title: 'Apply for the scholarship!',
			link: 'https://docs.google.com/forms/d/e/1FAIpQLSfGTHPHingmah2W9JHOSyqIi5WKOw7mf5ixW7Aa7HrmYmUdTA/closedform'
		},
		{ id: 4, title: 'Read all our articles!', link: '/posts' }
	];
	function uncheck() {
    		document.getElementById("my-drawer-3").checked = false;
		}
	onMount(() => {
		console.log(document.getElementById('my-drawer-3').checked);

	});
</script>

<div class="app">
	<div class="drawer w-full">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div class="flex justify-center bg-primary">
				<div class="max-w-6xl navbar">
					<div class="flex-none">
						<label for="my-drawer-3" class="btn btn-square btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="1.5em"
								viewBox="0 0 448 512"
								class="fill-white"
								><path
									d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
								/></svg
							>
						</label>
					</div>
					<h1 class="flex-1 px-2 mx-2 text-4xl font-black text-white"><a href="/">nhk</a></h1>
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
					<button class="background-secondary" on:click={uncheck}>
						<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" class="fill-secondary"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
					</button>
				</div>
				<div>
				<li class="mt-4" on:click={uncheck}>
					<a href={navbarItems[0].link} class="bg-secondary text-white px-4 py-3"
						>{navbarItems[0].title}</a
					>
				</li>
				<li class="mt-4" on:click={uncheck}>
					<a href={navbarItems[1].link} class="bg-secondary text-white px-4 py-3"
						>{navbarItems[1].title}</a
					>
				</li>
				<li class="mt-4" on:click={uncheck}>
					<a href={navbarItems[2].link} class="bg-secondary text-white px-4 py-3"
						>{navbarItems[2].title}</a
					>
				</li>
				<li class="mt-4" on:click={uncheck}>
					<a
						href={navbarItems[3].link}
						class="bg-primary text-white px-4 py-3 font-bold"
						target="_blank">{navbarItems[3].title}</a
					>
				</li>
				<li class="mt-4" on:click={uncheck}>
					<a
						href={navbarItems[4].link}
						class="bg-white border-2 border-secondary text-secondary font-medium px-4 py-3"
						>{navbarItems[4].title}</a
					>
				</li>
			</div>
				<div class="flex justify-between ml-auto mt-auto w-2/5">
					<a href="https://www.instagram.com/teamnaharkatia" target="_blank"
						><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"
							><style>
								svg {
									fill: #2b2d42;
								}
							</style><path
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
							/></svg
						></a
					>
					<a href="https://www.facebook.com/teamnaharkatia" target="_blank"
						><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"
							>
							<style>
								svg {
									fill: #2b2d42;
								}
							</style><path
								d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
							/></svg
						></a
					>
					<a href="https://twitter.com/teamnaharkatia" target="_blank"
						><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"
							>
							<style>
								svg {
									fill: #2b2d42;
								}
							</style><path
								d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
							/></svg
						></a
					>
				</div>
			</ul>
		</div>
	</div>
</div>
