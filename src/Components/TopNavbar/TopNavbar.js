import React, { useState, useContext } from "react";
import navImage from "../../images/logo-nav.png";
import { NavLink, Link } from "react-router-dom";
import { ToggleSideNavbarContactModal } from "../../Contexts/ToggleSideNavbarContactModalContext";

function TopNavbar() {
	const { toggleSideNavbar, toggleContactModal } = useContext(
		ToggleSideNavbarContactModal
	);

	const [navbarBgColor, setNavbarBgColor] = useState("transparent");
	window.addEventListener("scroll", (e) => {
		if (window.scrollY > 50) {
			setNavbarBgColor("var(--theme-blue)");
		} else {
			setNavbarBgColor("transparent");
		}
	});
	return (
		<nav className="navbar" style={{ background: navbarBgColor }}>
			<div className=" top-navbar">
				<div className="top-navbar__left-items d-flex justify-content-center align-items-center">
					<Link to="/home">
						<img src={navImage} alt="Moneyhop Logo" className="top-nav__logo" />
					</Link>
					<a
						href="https://moneyhop.co/send/"
						className="text-white text-decoration-none money-transfer-link anchor-link"
						target="_blank"
						rel="noreferrer"
					>
						Money Transfer
					</a>
				</div>
				<button className="open-side-navbar-btn" onClick={toggleSideNavbar}>
					{" "}
					&#9776;
				</button>
				<div className="top-navbar__right-items">
					<NavLink
						activeClassName="active-navbar-item"
						className="text-white mx-4 text-decoration-none anchor-link"
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						activeClassName="active-navbar-item"
						className="text-white mx-4  text-decoration-none anchor-link"
						to="/blog"
					>
						Blog
					</NavLink>
					<a
						className="text-white mx-4  text-decoration-none anchor-link"
						href="https://moneyhop.co/faq/"
						target="_blank"
						rel="noreferrer"
					>
						FAQ's
					</a>
					<button
						className="top-navbar__toggle-contact-modal text-white"
						onClick={toggleContactModal}
					>
						Contact Us
					</button>
					<a
						href="https://hop169616.typeform.com/to/fd1K4tfG"
						target="_blank"
						rel="noreferrer"
						className=" mx-5 text-decoration-none  top-navbar__early-access-btn"
					>
						Early Access
					</a>
				</div>
			</div>
		</nav>
	);
}
export default TopNavbar;
