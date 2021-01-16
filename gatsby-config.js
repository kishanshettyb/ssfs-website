require("dotenv").config();

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
			resolve: `gatsby-remark-images-native-lazy-load`,
			options: {
				loading: "lazy", // "lazy" | "eager" | "auto"
			},
		},
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
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `tomato`,
				// Disable the loading spinner.
				showSpinner: true,
			},
		},
		{
			resolve: `gatsby-plugin-firebase`,
			options: {
				credentials: {
					apiKey: process.env.apiKey,
					authDomain: process.env.authDomain,
					databaseURL: process.env.databaseURL,
					projectId: process.env.projectId,
					storageBucket: process.env.storageBucket,
					messagingSenderId: process.env.messagingSenderId,
					appId: process.env.appId,
					measurementId: process.env.measurementId,
				},
			},
		},
	],
};
