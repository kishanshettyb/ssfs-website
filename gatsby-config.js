module.exports = {
	siteMetadata: {
		title: "My Gatsby Site",
	},
	plugins: [
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "G-3WPLBM424P",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-offline",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`limelight`,
					`source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
				],
				display: "swap",
			},
		},
	],
};
