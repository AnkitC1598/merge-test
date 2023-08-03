/** @type {import('tailwindcss').Config} */
const SharedTailwindConfig = require("./src/submodules/web-core/tailwind.config")
const plugin = require("tailwindcss/plugin")

const SharedTailwindConfigThemeExtend = SharedTailwindConfig.theme.extend
const ExtendedTheme = {
	width: {
		excludeSidebarIcon: "calc(100vw - 56px)",
	},
}
let MergedExtentedTheme = {}

Object.keys(SharedTailwindConfigThemeExtend).forEach(key => {
	if (ExtendedTheme.hasOwnProperty(key)) {
		MergedExtentedTheme[key] = {
			...ExtendedTheme[key],
			...SharedTailwindConfigThemeExtend[key],
		}
		delete ExtendedTheme[key]
	} else MergedExtentedTheme[key] = SharedTailwindConfigThemeExtend[key]
})
MergedExtentedTheme = Object.assign(MergedExtentedTheme, ExtendedTheme)

const SharedTailwindConfigPlugins = SharedTailwindConfig.plugins
const ExtendedPlugins = [
	plugin(function ({ addUtilities }) {
		addUtilities({
			".rotate-x-180": {
				transform: "rotateX(180deg)",
			},
			".preserve-3d": {
				transformStyle: "preserve-3d",
			},
			".perspective": {
				perspective: "1000px",
			},
			".backface-hidden": {
				backfaceVisibility: "hidden",
			},
		})
	}),
]
const MergedPlugins = [...SharedTailwindConfigPlugins, ...ExtendedPlugins]

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: MergedExtentedTheme,
	},
	plugins: MergedPlugins,
}
