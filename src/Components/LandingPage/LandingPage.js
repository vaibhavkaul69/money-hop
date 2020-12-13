import React, { useState } from "react";
import playStoreBadge from "../../images/play-store-badge.png";
import adv_1 from "../../images/adv-1.gif";
import adv_2 from "../../images/adv-2.gif";
import adv_4 from "../../images/adv-4.gif";
import adv_5 from "../../images/adv-5.gif";
function LandingPage() {
	document.title = "India's First Cross Border Neo-Bank - Hop";

	const headingArray = [
		"Digital Account",
		"Borderless Banking",
		"One Global Card ",
	];
	return (
		<section className="landing-page-main-body">
			<div className="homepage-hero-section d-flex justify-content-center align-items-center">
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
						<button
							className="cta__join-us-btn "
							onClick={() =>
								window.open("https://hop169616.typeform.com/to/fd1K4tfG")
							}
						>
							Join us
						</button>
						<a
							href="https://play.google.com/store/apps/details?id=com.hop.moneyhop&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={playStoreBadge}
								alt="Playstore link to the app"
								className="cta__play-store-badge mx-4"
							/>
						</a>
					</div>
				</div>
			</div>

			<section className="homepage-money-hop__benefits homepage-section">
				<h1 className="homepage-section__heading">Endless Benefits with hop</h1>
				<div className="hop-benefits__grid-container container">
					<div className="benefits__item">
						<img
							src="https://moneyhop.co/static/media/benefits-images/one-account.svg"
							alt="Money hop benefits"
							className="benefit-thumbnail-image"
						/>
						<h4 className="benefits-description">
							One account for all your banking needs
						</h4>
					</div>
					<div className="benefits__item">
						<img
							src="https://moneyhop.co/static/media/benefits-images/smarter.svg"
							alt="Money hop benefits"
							className="benefit-thumbnail-image"
						/>
						<h4 className="benefits-description">Smarter and Faster banking</h4>
					</div>
					<div className="benefits__item">
						<img
							src="https://moneyhop.co/static/media/benefits-images/no-extra.svg"
							alt="Money hop benefits"
							className="benefit-thumbnail-image"
						/>
						<h4 className="benefits-description">No Extra Fees</h4>
					</div>
					<div className="benefits__item">
						<img
							src="https://moneyhop.co/static/media/benefits-images/best-interest.svg"
							alt="Money hop benefits"
							className="benefit-thumbnail-image"
						/>
						<h4 className="benefits-description">
							Best Interest Rates upto 6%
						</h4>
					</div>
					<div className="benefits__item">
						<img
							src="https://moneyhop.co/static/media/benefits-images/controls.svg"
							alt="Money hop benefits"
							className="benefit-thumbnail-image"
						/>
						<h4 className="benefits-description">
							Smart Card Controls,
							<br /> through the app
						</h4>
					</div>
					<div className="benefits__item">
						<img
							src="https://moneyhop.co/static/media/benefits-images/rewards.svg"
							alt="Money hop benefits"
							className="benefit-thumbnail-image"
						/>
						<h4 className="benefits-description">Get Rewarded for spending</h4>
					</div>
				</div>
			</section>

			<section
				className="money-hop-advantages  homepage-section"
				id="homepage-section-advantages"
			>
				<h1 className="homepage-section__heading text-white">
					All you need is HOP! <br />
				</h1>
				<div className="money-hop-advantages__grid-container ">
					<div className="hop-advantage__grid-item">
						<img className="hop-advantage-gif global-card-gif" src={adv_1} />

						<h3 className="hop-advantages__grid-item-title">
							One Global Account,
							<br /> One Global Card
						</h3>
						<ul className="hop-advantages__grid-item-point">
							<li>One multi-currency bank account</li>
							<li>One account for domestic and international transactions</li>
							<li>Fusion of Debit + Credit + FX cards</li>
							<li>No complex documentation required</li>
						</ul>
					</div>
					<div className="hop-advantage__grid-item">
						<img className="hop-advantage-gif" src={adv_2} />

						<h3 className="hop-advantages__grid-item-title">
							Omnichannel spending ability
						</h3>
						<ul className="hop-advantages__grid-item-point">
							<li>Travel Global; Spend local</li>
							<li>One account- spend in INR, USD, AUD, or any currency.</li>
							<li>
								Tap, Swipe, Scan using your contactless HOP card around the
								globe.
							</li>
							<li>Make payments through QR code scan, UPI, or NFC.</li>
						</ul>
					</div>
					<div className="hop-advantage__grid-item">
						<img
							className="hop-advantage-gif"
							src="https://moneyhop.co/static/media/features-videos/card.gif"
						/>

						<h3 className="hop-advantages__grid-item-title">
							Say ‘goodbye’ to hidden fees
							<br /> Say ‘hello’ to transparency
						</h3>
						<ul className="hop-advantages__grid-item-point">
							<li>Paperless currency exchange, anytime, anywhere.</li>
							<li>Near 0% Forex Markup.</li>
							<li>Lock-in currency rates for future foreign exchange.</li>
							<li>No fees for card issuance, ATM withdrawals abroad, etc.</li>
						</ul>
					</div>
					<div className="hop-advantage__grid-item">
						<img className="hop-advantage-gif" src={adv_4} />

						<h3 className="hop-advantages__grid-item-title">
							Expense Management
						</h3>
						<ul className="hop-advantages__grid-item-point">
							<li>Your expenses won’t be a mystery anymore.</li>
							<li>Track all expenses with categorised expense</li>
							<li>Set daily or monthly budgets.</li>
							<li>Auto Savings to move your money in the right direction.</li>
						</ul>
					</div>
					<div className="hop-advantage__grid-item">
						<img className="hop-advantage-gif" src={adv_5} />

						<h3 className="hop-advantages__grid-item-title">
							Smart Savers Account
						</h3>
						<ul className="hop-advantages__grid-item-point">
							<li>
								Work towards your savings goals with the Smart Savers account.
							</li>
							<li>
								Auto-transfer extra money from expenditure to savings account.
							</li>
							<li>
								Savings account not connected to spending instruments to prevent
								impulsive splurges.
							</li>
							<li>
								Every transaction rounded off and the change gets invested.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="money-hop-supporters homepage-section">
				<h1 className="homepage-section__heading ">Supported by</h1>
				<div className="hop-supporters__grid-container container">
					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/ddcms.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>

					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/mc.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>

					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/dit.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>

					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/nsrcel.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>

					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/startupindia.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>

					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/eag.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>

					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/tie.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>
					<div className="supporter-grid__item">
						<img
							src="https://moneyhop.co/static/media/supporter-logos/ukgov.svg"
							alt="Money hop supporter"
							className="hop-supporter-logo"
						/>
					</div>
				</div>
			</section>
		</section>
	);
}

export default LandingPage;
