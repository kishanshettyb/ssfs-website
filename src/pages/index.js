import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import SliderCard from "../components/SliderCard";
import { Helmet } from "react-helmet";
import "../assets/scss/theme.scss";
import WhyUs from "../components/WhyUs";
import RegisterSection from "../components/RegisterSection";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
const servicelist = [
	{
		id: "1",
		image: "bg-1.jpg",
		title: "title one",
		desc: "desc one",
	},
	{
		id: "2",
		image: "bg-2.jpg",
		title: "title two",
		desc: "desc two",
	},
	{
		id: "3",
		image: "bg-2.jpg",
		title: "title two",
		desc: "desc two",
	},
	{
		id: "4",
		image: "bg-2.jpg",
		title: "title two",
		desc: "desc two",
	},
];

const Theme = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>My Title</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
			<Header />

			<Slider />
			<SliderCard />
			<WhyUs />
			<ServiceSection
				title="Plumbing Services in Banglore"
				tagline="Residential Plumbing Professionals Repair"
				services={servicelist}
			/>
			<RegisterSection
				title="Register As A Professional in minutes."
				tagline="Get Your SSFS Acount Today!"
				btnName="Get Your Account"
				link="registration"
				background="linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)"
			/>
			<Footer />
		</div>
	);
};

export default Theme;
