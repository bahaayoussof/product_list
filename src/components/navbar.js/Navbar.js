import React from "react";

import "./navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar_list">
				{["Home", "About", "Contact"].map((item, index) => (
					<li className="navbar_item" key={index}>
						<a href="#" className="navbar_link">
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
