import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
