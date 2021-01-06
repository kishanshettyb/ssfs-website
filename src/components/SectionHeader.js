import React from "react";

export default function SectionHeader(props) {
	return (
		<div className="section-heading">
			<div className="text-center">
				<h2 className="title">{props.title}</h2>
				<div className="bar mx-auto"></div>
				<p>{props.desc}</p>
			</div>
		</div>
	);
}
