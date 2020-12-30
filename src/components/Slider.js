import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import sliderOne from "../assets/img/bg-7.jpg";
import sliderTwo from "../assets/img/bg-10.jpg";
import sliderThree from "../assets/img/bg-6.jpg";

export default function Slider() {
	return (
		<Carousel>
			<Carousel.Item interval={2500}>
				<div className="image">
					<img className="d-block w-100" src={sliderOne} alt="First slide" />
				</div>
				{/* <Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<div className="image">
					<img className="d-block w-100" src={sliderOne} alt="Third slide" />
				</div>
				{/* <Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<div className="image">
					<img className="d-block w-100" src={sliderOne} alt="Third slide" />
				</div>
				{/* <Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption> */}
			</Carousel.Item>
		</Carousel>
	);
}
