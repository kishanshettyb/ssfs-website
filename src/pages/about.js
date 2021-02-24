import React from "react";
import Header from "../components/Header";
import RegisterSection from "../components/RegisterSection";
import RightImageConent from "../components/RightImageConent";
// import SectionHeader from "../components/SectionHeader";
import SmallBanner from "../components/SmallBanner";
import Footer from "../components/Footer";
import ClientImgCard from "../components/ClientImgCard";
import AppSection from "../components/AppSection";
// import Team from "../components/Team";

export default function about() {
	return (
		<div>
			<Header />
			<SmallBanner title="About" desc="The SSFS Story" bgclass="bg-image" />

			<RightImageConent
				title="About Smart Solution Facility Service"
				specialTitle="How we wewre founded"
				content="Smart Solution Facility Service commenced operations in 2012 by providing House Keeping Services to
        its clients. As a business expansion recently we extended our services to other facility services like
        Environmental services, Plumbing Services, Horticulture etc. Smart Solution firmly believes that the
        three main criteria in providing quality services are - Selection, Training, and Supervision."
			/>
			{/* <section className="section-padding bg-light">
				<SectionHeader
					title="Our Team"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Team />
			</section> */}
			<RegisterSection
				title="Ready to Talk?"
				tagline="Our team is here to answer your question about SSFC"
				btnName="Contact Us"
				link="/contact/"
				background="linear-gradient(90deg,#ee0979,#ff6a00)"
				extraHeading="Our Valuable clients"
			/>
			<ClientImgCard />
			<AppSection />
			<RegisterSection
				title="Register As A Professional in minutes."
				tagline="Get Your SSFS Acount Today!"
				btnName="Get Your Account"
				link="/registration/"
				background="linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)"
			/>
			<Footer />
		</div>
	);
}
