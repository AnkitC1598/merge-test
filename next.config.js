/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: process.env.BASE_PATH || "",
	reactStrictMode: true,
	images: {
		domains: [
			"lucdn.letsupgrade.net",
			"images.unsplash.com",
			"source.unsplash.com",
			"api.dicebear.com",
			"t1.gstatic.com",
			"static.lisaapp.in",
		],
	},
}

module.exports = nextConfig
