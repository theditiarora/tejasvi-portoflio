/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['IBM plex sans', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				heading: "40px",
				sub: "24px",
				content: "16px",
			},
			colors: {
				orange: "#FFECCC",
			},
			screens: {
				'tablet': '670px',
			  },
		},
	},
	plugins: [],
}
