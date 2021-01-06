import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	const data = useStaticQuery(graphql`
		query Images {
			images: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
				nodes {
					id
					childImageSharp {
						fluid(maxWidth: 3200) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			{data.images.nodes.map((image) => (
				<Carousel.Item>
					<div className="image">
						<Img
							key={image.id}
							fluid={image.childImageSharp.fluid}
							alt="banner-1"
							className="d-block w-100 slider-image"
						/>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
		// <Carousel>
		// 	<Carousel.Item interval={2500}>
		// 		<div className="image">
		// 			<img className="d-block w-100" src={sliderOne} alt="First slide" />
		// 		</div>
		// 	</Carousel.Item>
		// 	<Carousel.Item>
		// 		<div className="image">
		// 			<img className="d-block w-100" src={sliderOne} alt="Third slide" />
		// 		</div>
		// 	</Carousel.Item>
		// 	<Carousel.Item>
		// 		<div className="image">
		// 			<img className="d-block w-100" src={sliderOne} alt="Third slide" />
		// 		</div>
		// 	</Carousel.Item>
		// </Carousel>
	);
};
export default Slider;
