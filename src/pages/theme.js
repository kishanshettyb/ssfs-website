import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import SliderCard from "../components/SliderCard";

import "../assets/scss/theme.scss";
import WhyUs from "../components/WhyUs";

export default function theme() {
	return (
		<div>
			<Header />
			<Slider />
			<SliderCard />
			<WhyUs />
			<div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}
