import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

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
						fluid(quality: 100) {
							originalName
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	`);
	return (
		<Carousel
			className="slider-carousel"
			activeIndex={index}
			onSelect={handleSelect}
		>
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
					<div
						className={
							image.childImageSharp.fluid.originalName == "plumbing.webp" ||
							image.childImageSharp.fluid.originalName == "homekeeping.webp"
								? "leftbanner slider-content"
								: "rightbanner slider-content"
						}
					>
						<h1 className="title">
							{image.childImageSharp.fluid.originalName == "plumbing.webp"
								? "	Best Plumbing Service in Banglore"
								: image.childImageSharp.fluid.originalName == "homekeeping.webp"
								? "Best House keeping service in Banglore"
								: image.childImageSharp.fluid.originalName == "cleaning.png"
								? "Professional cleaning service"
								: "Home service on demand"}
						</h1>
						<p>
							{image.childImageSharp.fluid.originalName == "plumbing.webp"
								? "	Best Plumbing Service in Banglore"
								: image.childImageSharp.fluid.originalName == "homekeeping.webp"
								? "Best House keeping service in Banglore"
								: image.childImageSharp.fluid.originalName == "cleaning.png"
								? "Professional cleaning service"
								: "Home service on demand"}
						</p>
						<Link to="/">
							<Button variant="outline-light">Read More</Button>
						</Link>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
export default Slider;
