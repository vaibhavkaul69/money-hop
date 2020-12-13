import React from "react";

function About() {
	document.title = "About";

	return (
		<section className="about-hop-container">
			<div className="about-hop__hero-section">
				<div className="container h-100 d-flex flex-column justify-content-center align-items-center">
					<h1 className="about-hop-hero__heading no-margin ">Who we are?</h1>
					<h2 className="about-hop-hero__subheading no-margin ">
						We are a full-stack cross-border banking solution that caters to the
						global aspirations of the Indian millennials.
					</h2>
					<br />
					<h2 className="about-hop-hero__subheading ">
						Join our waitlist to experience the best banking services! We'll
						notify you when we are ready to onboard you.
					</h2>
				</div>
			</div>
			<div className="about-hop__mission-vision mt-5">
				<div className="container">
					<h1 className="about-hop__body-content-heading no-margin ">
						Our Mission
					</h1>
					<hr className="about-hop__body-content-heading-line" />
					<ul className="mission-vision__points">
						<li className="my-3">To make banking smarter, faster, better.</li>
						<li>
							To provide a unified platform that lets users Save, Invest,
							Borrow, and Spend.
						</li>
						<li className="my-3">
							To make International money transfer cheap, convenient, and
							transparent with competitive exchange rates and no mark-up fees.
						</li>
						<li className="my-3">
							To make banking paperless, presenceless and cashless.
						</li>
						<li className="my-3">
							To help users with budgeting and money management.
						</li>
					</ul>
					<h1 className="about-hop__body-content-heading no-margin  mt-5">
						Our Vision
					</h1>
					<hr className="about-hop__body-content-heading-line" />
					<ul className="mission-vision__points ">
						<li className="my-4">
							Our vision is to revolutionize banking for millennials in India
							and globally. moneyHop will provide millennials experience-rich,
							digital, and mobile-first banking solutions.
						</li>
						<li className="my-4">
							The Open Banking revolution has brought about multiple avenues for
							innovation and growth. So, the consumers expect variegated
							choices, transparency, and to be at the center of the value chain.
							moneyHop will utilize Artificial Intelligence to analyze consumer
							behavior and offer prescriptive services to its customers.
						</li>
						<li>
							Ultimately, we aim to become an aggregator of financial services
							where the consumer’s financial needs can be addressed from a
							single touchpoint.
						</li>
					</ul>
				</div>
			</div>
			<div className="about-hop__team-thumbnail">
				<div className="container">
					<h1 className="about-hop__body-content-heading no-margin  mt-5">
						Our Team
					</h1>
					<hr className="about-hop__body-content-heading-line ml-3" />
					<h2 className="about-hop__team-subheading mt-3">
						Meet Our Skilled People
					</h2>
					<div className="team-grid-container mt-5">
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/mayank-goyal.png"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Mayank Goyal</h2>
							<p className="team-member-description">Founder & CEO</p>
							<a
								href="https://www.linkedin.com/in/mayankgoyalcfa/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/harikishore.png"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Harikishore Tadigotla</h2>
							<p className="team-member-description">VP, Engineering</p>
							<a
								href="https://www.linkedin.com/in/harikishore/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/gaurav-agarwal.jpg"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Gaurav Agarwal</h2>
							<p className="team-member-description">Product Manager</p>
							<a
								href="https://www.linkedin.com/in/gkbansal19/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/sanjeev-kumar.png"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Sanjeev Kumar</h2>
							<p className="team-member-description">
								Digital Marketing Manager
							</p>
							<a
								href="https://www.linkedin.com/in/sanjeevkumar81/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/mohit-parashar.jpg"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Mohit Parashar</h2>
							<p className="team-member-description">Software Engineer</p>
							<a
								href="https://www.linkedin.com/in/mohit-parashar-a85376125/"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/himanshu-mittal.jpg"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Himanshu Mittal</h2>
							<p className="team-member-description">
								DevOps and Automation Engineer
							</p>
							<a
								href="https://www.linkedin.com/in/himanshu-mittal-aab6b7104/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/ujjwal-chaudhary.jpeg"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Ujjwal Chaudhary</h2>
							<p className="team-member-description">Marketing Intern</p>
							<a
								href="https://www.linkedin.com/in/ujjawalchoudhry/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/sachin-bapure.jpg"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Sachin Bapure</h2>
							<p className="team-member-description">Full Stack Engineer</p>
							<a
								href="https://www.linkedin.com/in/sachinbapure/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/mayank-khan.jpg"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Mayank Khan</h2>
							<p className="team-member-description">UI/UX Designer</p>
							<a
								href=" https://www.linkedin.com/in/mksd1/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
					</div>
					<h1 className="about-hop__body-content-heading no-margin  mt-5">
						Our Advisors
					</h1>
					<hr className="about-hop__body-content-heading-line ml-3" />
					<h2 className="about-hop__team-subheading mt-3">
						Meet Our Back Bone
					</h2>
					<div className="team-grid-container mt-5">
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/harish-prabhu.png"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Harish A. Prabhu</h2>
							<p className="team-member-description">
								EX- CEO | IB | Angel Investor | Board Member | Advisor
							</p>
							<a
								href="https://www.linkedin.com/in/harish-prabhu-999174/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/andy-lund.png"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Andy Lund</h2>
							<p className="team-member-description">
								EX- Google | MSFT | Scale -Ups | Big - Data | SaaS | Cloud
							</p>
							<a
								href="https://www.linkedin.com/in/andylund112/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
						<div className="team-member-grid-item">
							<img
								src="https://moneyhop.co/static/media/people-images/paresh-davdra.png"
								alt="Team member"
								className="team-member-picture"
							/>
							<h2 className="team-member-name">Paresh Davdra</h2>
							<p className="team-member-description">
								Co-Founder at RationalFX and Xendpay | Authority in Fintech |
								Investor
							</p>
							<a
								href="https://www.linkedin.com/in/davdra/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://moneyhop.co/static/media/social-icons/linkedin.png"
									alt="Linkedin Icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
