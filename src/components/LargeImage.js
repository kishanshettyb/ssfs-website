import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const LargeImage = () => {
	const data = useStaticQuery(graphql`
		query LoginImage {
			image: file(relativePath: { eq: "bg-new.jpg" }) {
				id
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return <Img className="vh-100" fluid={data.image.childImageSharp.fluid} />;
};
export default LargeImage;
