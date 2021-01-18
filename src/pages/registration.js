import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SmallBanner from "../components/SmallBanner";

export default function registration() {
	return (
		<div>
			<Header />
			<SmallBanner
				title="Register as a SSFS professional"
				desc="The SSFS Story"
				bgclass="bg-image"
				imagename="bg-1"
			/>
			<Footer />
		</div>
	);
}
