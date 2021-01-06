import React from "react";

export default function SectionHeader(props) {
	return (
		<section class="section-heading section-padding">
			<div className="text-center">
				<h2 className="title">{props.title}</h2>
				<div className="bar mx-auto"></div>
				<p>{props.desc}</p>
			</div>
		</section>
	);
}
