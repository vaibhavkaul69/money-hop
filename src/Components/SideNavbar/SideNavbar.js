import React, { useContext } from "react";
import "./SideNavbar.css";
import { NavLink } from "react-router-dom";
import { ToggleSideNavbarContactModal } from "../../Contexts/ToggleSideNavbarContactModalContext";

function SideNavbar() {
	const { isSideBarOpen, toggleSideNavbar, toggleContactModal } = useContext(
		ToggleSideNavbarContactModal
	);

	return isSideBarOpen ? (
		<nav className="side-navbar-container">
			<div className="side-navbar-body">
				<button className="side-navbar-close-btn" onClick={toggleSideNavbar}>
					×
				</button>
				<div className="side-navbar__body-items">
					<NavLink
						activeClassName="active-navbar-item"
						className="mx-4 text-decoration-none side-navbar-body-item "
						to="/send-money"
					>
						Money Transfer
					</NavLink>
					<NavLink
						activeClassName="active-navbar-item"
						className="mx-4 text-decoration-none side-navbar-body-item "
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						activeClassName="active-navbar-item"
						className="mx-4  text-decoration-none side-navbar-body-item"
						to="/blog"
					>
						Blog
					</NavLink>
					<NavLink
						activeClassName="active-navbar-item"
						className=" mx-4  text-decoration-none side-navbar-body-item"
						to="/faq"
					>
						FAQ's
					</NavLink>
					<button
						className=" side-navbar-body-item"
						onClick={toggleContactModal}
					>
						Contact Us
					</button>
					<a
						href="https://hop169616.typeform.com/to/fd1K4tfG"
						target="_blank"
						className=" text-decoration-none  side-navbar__early-access-btn"
					>
						Early Access
					</a>
				</div>
			</div>
		</nav>
	) : null;
}

export default SideNavbar;
