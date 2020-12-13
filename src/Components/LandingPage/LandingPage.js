import React, { useState } from "react";
import "./LandingPage.css";
import TopNavbar from "../TopNavbar/TopNavbar";
import playStoreBadge from "../../images/play-store-badge.png";

function LandingPage() {
	document.title = "India's First Cross Border Neo-Bank - Hop";

	const headingArray = [
		"Digital Account",
		"Borderless Banking",
		"One Global Card ",
	];
	return (
		<section className="homepage-hero-section d-flex justify-content-center align-items-center">
			<div className="homepage-hero-section__content">
				<h1 className="hero-section__heading ">
					{" "}
					Think <span>{headingArray[0]}</span>
				</h1>
				<h1 className="hero-section__heading ">
					{" "}
					Think <span>{headingArray[1]}</span>
				</h1>
				<h1 className="hero-section__heading ">
					{" "}
					Think <span>{headingArray[2]}</span>
				</h1>
				<span className="mr-3 my-0 hero-dash no-margin">
					&#x02015;&#x02015;&#x02015;&#x02015;&#x02015;&#x02015;&#x02015;
				</span>
				<h1 className="hero-section__tagline my-0 no-margin">Think HOP</h1>

				<p className="hero-section__subheading text-white mt-3 ">
					Full-stack global banking solution for Indian millennials. Save,
					Invest, Borrow, and Spend with hop.
				</p>
				<div className="hero-section__cta-btn my-5">
					<button className="cta__join-us-btn ">Join us</button>
					<a
						href="https://play.google.com/store/apps/details?id=com.hop.moneyhop&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						target="_blank"
					>
						<img
							src={playStoreBadge}
							alt="Playstore link to the app"
							className="cta__play-store-badge mx-4"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}

export default LandingPage;
