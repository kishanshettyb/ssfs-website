import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Container } from "react-bootstrap";

const SmallBanner = (props) => {
	const data = useStaticQuery(
		graphql`
			query {
				desktop: file(relativePath: { eq: "bg-1.jpg" }) {
					childImageSharp {
						fluid(quality: 90) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`
	);
	// Set ImageData.
	const imageData = data.desktop.childImageSharp.fluid;
	return (
		<BackgroundImage className="small-banner" fluid={imageData}>
			<Container>
				<h2>{props.title}</h2>
				<p>{props.desc}</p>
			</Container>
		</BackgroundImage>
	);
};

export default SmallBanner;
