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
		image: "img-1.jpg",
		title: "Plumbing Installation Services",
		desc:
			"Our Professional plumbers install all kinds of different fixtures and parts in your commercial plumbing systems.",
	},
	{
		id: "2",
		image: "img-2.jpg",
		title: "Plumbing Pipe Upgrades Services",
		desc:
			"SSFS Plumbing services help upgrade the existing piping system or replace it with a new one. ",
	},
	{
		id: "3",
		image: "img-3.jpg",
		title: "Drain and Sewer Line Services",
		desc:
			"SSFS plumbers have to perform another major job of servicing drains and sewer lines",
	},
	{
		id: "4",
		image: "img-4.jpg",
		title: "Commercial Water Heater Services",
		desc:
			"SSFS plumbing service that a plumber can provide is the service of water heating",
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
