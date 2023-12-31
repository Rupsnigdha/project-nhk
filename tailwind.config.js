/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			avenir: ['Avenir', 'sans-serif']
		},
		extend: {}
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#FF4646',

					secondary: '#2B2D42',

					accent: '#D90429',

					neutral: '#ff4646',

					'base-100': '#fffef7',

					info: '#278bdd',

					success: '#1cc4ab',

					warning: '#f5d666',

					error: '#fa3d50'
				}
			}
		]
	}
};
