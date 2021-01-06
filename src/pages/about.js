import React from "react";
import Header from "../components/Header";
import RegisterSection from "../components/RegisterSection";
import RightImageConent from "../components/RightImageConent";
import SectionHeader from "../components/SectionHeader";
import SmallBanner from "../components/SmallBanner";

export default function about() {
	return (
		<div>
			<Header />
			<SmallBanner title="About" desc="The SSFS Story" bgclass="bg-image" />
			<SectionHeader
				title="Our Team"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			{/* <RightImageConent
				title="About Smart Solution Facility Service"
				specialTitle="How we wewre founded"
				content="Smart Solution Facility Service commenced operations in 2012 by providing House Keeping Services to
        its clients. As a business expansion recently we extended our services to other facility services like
        Environmental services, Plumbing Services, Horticulture etc. Smart Solution firmly believes that the
        three main criteria in providing quality services are - Selection, Training, and Supervision."
			/> */}
			<RegisterSection />
		</div>
	);
}
