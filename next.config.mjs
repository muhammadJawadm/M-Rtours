/** @type {import('next').NextConfig} */

const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home2',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
