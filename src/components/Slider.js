import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import sliderOne from "../assets/img/bg-7.jpg";

export default function Slider() {
	return (
		<Carousel>
			<Carousel.Item interval={2500}>
				<div className="image">
					<img className="d-block w-100" src={sliderOne} alt="First slide" />
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="image">
					<img className="d-block w-100" src={sliderOne} alt="Third slide" />
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="image">
					<img className="d-block w-100" src={sliderOne} alt="Third slide" />
				</div>
			</Carousel.Item>
		</Carousel>
	);
}
