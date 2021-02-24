import React from "react";
import Header from "../components/Header";
// import RegisterSection from "../components/RegisterSection";
// import RightImageConent from "../components/RightImageConent";
// import SectionHeader from "../components/SectionHeader";
import SmallBanner from "../components/SmallBanner";
import Footer from "../components/Footer";
import ClientImgCard from "../components/ClientImgCard";
// import AppSection from "../components/AppSection";
// import Team from "../components/Team";

export default function clients() {
	return (
		<div>
			<Header />
			<SmallBanner
				title="Clients"
				desc="Our valuable clients"
				bgclass="bg-image"
			/>
			<ClientImgCard />

			{/* <section>
				<Div>
					<Row></Row>
				</Div>
			</section> */}

			<Footer />
		</div>
	);
}
