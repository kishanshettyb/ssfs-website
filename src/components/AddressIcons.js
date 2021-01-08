import React from "react";
import Pin from "../assets/icons/map-marker-alt-solid.svg";
import Phone from "../assets/icons/phone-volume-solid.svg";
import Envelope from "../assets/icons/envelope-solid.svg";

const AddressIcons = () => {
	return (
		<div>
			<ul className="address-ul">
				<li>
					<div className="d-flex align-items-center">
						<div className="icon-circle">
							<img className="icons" src={Pin} alt="Address" />
						</div>
						<div>
							<h2>Address</h2>
							<p>
								376, 1st Main, 9th Cross Kasturiba Colony, Girinagar, Bangalore
								- 560085.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div className="d-flex align-items-center">
						<div className="icon-circle">
							<img className="icons" src={Envelope} alt="Address" />
						</div>
						<div>
							<h2>Email</h2>
							<p>nagendra.smart1947@gmail.com</p>
							<p>nagendra.smart12@gmail.com</p>
						</div>
					</div>
				</li>
				<li>
					<div className="d-flex align-items-center">
						<div className="icon-circle">
							<img className="icons" src={Phone} alt="Address" />
						</div>
						<div>
							<h2>Pone</h2>
							<p>+91 9945499957</p>
							<p>+91 9845021173</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};
export default AddressIcons;
