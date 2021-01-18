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
import ManPowerServiceSection from "../components/ManPowerServiceSection";

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
			/>
			<RegisterSection
				title="Register As A Professional in minutes."
				tagline="Get Your SSFS Acount Today!"
				btnName="Get Your Account"
				link="registration"
				background="linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)"
			/>
			<ManPowerServiceSection
				title="Manpower Services in Banglore"
				tagline="Residential Plumbing Professionals Repair"
			/>
			<Footer />
		</div>
	);
};

export default Theme;
