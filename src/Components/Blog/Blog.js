import React, { useState } from "react";
import subscribe from "../../images/subscribe.svg";
import BlogBody from "./BlogBody";

function Blog() {
	document.title = "Blogs";

	const [userMailId, setUserMailId] = useState("");
	const resetUserMailid = () => {
		alert(userMailId + " has successfully subscribed to our Blog.!");
		setUserMailId("");
	};
	return (
		<section className="blog-container">
			<div className="blog-hero-section">
				<h2 className="blog-hero-section__subheading">
					Subscribe to our blogs and stay
					<span> financially updated.</span>
				</h2>
				<div className="blog-hero-section__subscriber">
					<input
						type="email"
						placeholder="Enter your email address"
						value={userMailId}
						onChange={(e) => setUserMailId(e.target.value)}
					/>
					<button type="submit">
						<img
							src={subscribe}
							alt="Subscribe Icon"
							onClick={() => resetUserMailid()}
						/>
					</button>
				</div>
			</div>
			<BlogBody />
		</section>
	);
}

export default Blog;
