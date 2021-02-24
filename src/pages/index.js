import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import SliderCard from "../components/SliderCard";
import { Helmet } from "react-helmet";
import "../assets/scss/theme.scss";
import WhyUs from "../components/WhyUs";
import RegisterSection from "../components/RegisterSection";
// import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import ManPowerServiceSection from "../components/ManPowerServiceSection";
// import Reviews from "../components/Reviews";
// import ElectricianSection from "../components/ElectricianSection";
// import Products from "../components/Products";
import RightImageConent from "../components/RightImageConent";

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
			<RightImageConent
				title="About Smart Solution Facility Service"
				specialTitle="About SSFS"
				content="Smart Solution Facility Service commenced operations in 2012 by providing House Keeping Services to
        its clients. As a business expansion recently we extended our services to other facility services like
        Environmental services, Plumbing Services, Horticulture etc. Smart Solution firmly believes that the
        three main criteria in providing quality services are - Selection, Training, and Supervision."
			/>
			<ManPowerServiceSection
				title="Our Services"
				// tagline="Residential Plumbing Professionals Repair"
			/>
			<WhyUs />
			{/* <ElectricianSection
				title="Electrician Services in Banglore"
				tagline="Residential Plumbing Professionals Repair"
			/> */}
			{/* <ServiceSection
				title="Plumbing Services in Banglore"
				tagline="Residential Plumbing Professionals Repair"
			/> */}
			{/* <Reviews /> */}

			<RegisterSection
				title="Register As A Professional in minutes."
				tagline="Get Your SSFS Acount Today!"
				btnName="Contact Us"
				link="/contact/"
				background="linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)"
			/>
			{/* <Products /> */}
			<Footer />
		</div>
	);
};

export default Theme;
