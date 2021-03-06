import React from "react";
import footerLogo from "../../images/logo-nav.png";

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-body">
				<div className="footer-body__column">
					<img src={footerLogo} alt="Moneyhop-logo" className="footer-logo" />
					<h3 className="footer-column__heading">Reliable Banking</h3>
					<p className="footer-column__text">
						Hop is a full-fledged money changer regulated by the Reserve Bank of
						India (RBI). Your money is secure and easily accessible. Hop employs
						a range of security measures that ensures that both your money and
						details are safe.
					</p>

					<h3 className="footer-column__heading">Partners</h3>
					<img
						src="https://moneyhop.co/static/media/supporter-logos/visa.png"
						alt="Partner Images"
						className="footer-partner__logo"
					/>
					<img
						src="https://moneyhop.co/static/media/supporter-logos/sbm.png"
						alt="Partner Images"
						className="footer-partner__logo"
					/>
					<img
						src="https://moneyhop.co/static/media/supporter-logos/amfi.png"
						alt="Partner Images"
						className="footer-partner__logo"
					/>
					<h3 className="footer-column__heading no-margin">
						License number :{" "}
						<span class="footer-column__text">FE.KAN. 091/FFMC</span>
					</h3>
					<h3 className="footer-column__heading no-margin">
						ARN Number:
						<span class="footer-column__text">ARN - 172874</span>
					</h3>
				</div>
				<div className="footer-body__column">
					<h3 className="footer-column__heading">Products</h3>
					<ul className="footer-products__list">
						<li>
							<a
								href="https://moneyhop.co/send"
								className="text-decoration-none text-white"
								target="_blank"
								rel="noreferrer"
							>
								Money Transfer
							</a>{" "}
						</li>
						<li>
							<a className="text-decoration-none text-white">Forex Cards</a>{" "}
						</li>
						<li>
							<a className="text-decoration-none text-white">
								Savings Bank Account
							</a>{" "}
						</li>
					</ul>
				</div>
				<div className="footer-body__column">
					<h3 className="footer-column__heading">Our Offices</h3>
					<h3 className="footer-column__heading">UK Address</h3>
					<p className="footer-column__text">
						300 Vauxhall Bridge Rd, Westminster,
						<br /> London SW1V 1AA, United Kingdom
					</p>
					<h3 className="footer-column__heading">India Address</h3>
					<p className="footer-column__text">
						2082, 24th Main Rd, Vanganahalli,
						<br /> 1st Sector, HSR Layout,
						<br /> Bengaluru, Karnataka 560102
					</p>
					<div className="">
						<h3 className="footer-column__heading no-margin">Phone:</h3>
						<a
							href="tel:+91-6364001001"
							className="footer-column__text no-margin"
						>
							{" "}
							+91-6364001001
						</a>
						<h3 className="footer-column__heading no-margin">Email:</h3>
						<a
							href="mailto:hello@moneyhop.co"
							className="footer-column__text no-margin"
							target="_blank"
							rel="noreferrer"
						>
							hello@moneyhop.co
						</a>
					</div>
				</div>
				<div className="footer-body__column">
					<h3 className="footer-column__heading">Follow us on</h3>
					<a
						href="https://www.youtube.com/channel/UCIQxu_81NwZ-oljrrDyNDmw"
						target="_blank"
						rel="noreferrer"
						className="footer-social-icons"
					>
						<img
							src="https://moneyhop.co/static/media/social-icons/youtube.png"
							alt="Money hop social media Youtube"
						/>
					</a>
					<a
						href="https://www.facebook.com/moneyhop/"
						target="_blank"
						rel="noreferrer"
						className="footer-social-icons"
					>
						<img
							src="https://moneyhop.co/static/media/social-icons/facebook.png"
							alt="Money hop social media Facebook"
						/>
					</a>
					<a
						href="https://www.instagram.com/moneyhop_/"
						target="_blank"
						rel="noreferrer"
						className="footer-social-icons"
					>
						<img
							src="https://moneyhop.co/static/media/social-icons/instagram.png"
							alt="Money hop social media Instagram"
						/>
					</a>
					<a
						href="https://www.linkedin.com/company/moneyhop/"
						target="_blank"
						rel="noreferrer"
						className="footer-social-icons"
					>
						<img
							src="https://moneyhop.co/static/media/social-icons/linkedin.png"
							alt="Money hop social media Linkedin"
						/>
					</a>
					<a
						href="https://twitter.com/moneyhop_"
						target="_blank"
						rel="noreferrer"
						className="footer-social-icons"
					>
						<img
							src="https://moneyhop.co/static/media/social-icons/twitter.png"
							alt="Money hop social media Twitter"
						/>
					</a>
					<h3 className="footer-column__heading">Download our app</h3>
					<a
						href="https://play.google.com/store/apps/details?id=com.hop.moneyhop&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="footer-playstore-badge-icon"
							src="https://moneyhop.co/static/media/google-play-badge.png"
							alt="Play store icon"
						/>
					</a>{" "}
				</div>
			</div>
		</footer>
	);
}
export default Footer;
