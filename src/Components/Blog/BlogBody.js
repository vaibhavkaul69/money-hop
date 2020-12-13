import React, { useState } from "react";

function BlogBody() {
	var blog_thumbnails_1 = [
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg",
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
	];
	var blog_thumbnails_2 = [
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
		{
			blogImage:
				"https://moneyhop.co/wp-content/uploads/2020/11/malgorzata-bujalska-03Zf94erQWo-unsplash-1200x900.jpg",
			url:
				"https://moneyhop.co/blog/everything-you-must-know-about-sending-money-abroad/",

			title: "Everything You Must Know About Sending Money Abroad",
			description:
				"Confused about making an international money transfer? Don’t worry! You aren’t alone. With various services, security…",
		},
	];
	const [currentBlogView, setCurrentBlogView] = useState(blog_thumbnails_1);
	return (
		<article className="blog-body">
			<h1 className="homepage-section__heading ">Our Blogs</h1>
			<div className=" blog-thumbnail-grid container">
				{currentBlogView.map((item) => {
					return (
						<div className="blog-thumbnail-grid__item">
							<img src={item.blogImage} alt="Blog Image" />
							<h2 className="blog-item__title">{item.title}</h2>
							<p className="blog-item__description">{item.description}</p>
							<a
								href="https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/"
								target="_blank"
							>
								Continue reading
							</a>
						</div>
					);
				})}
			</div>
			<div className="blog-pagination">
				<button
					className="pagination-number"
					onClick={() => setCurrentBlogView(blog_thumbnails_1)}
				>
					1
				</button>
				<button
					className="pagination-number"
					onClick={() => setCurrentBlogView(blog_thumbnails_2)}
				>
					2
				</button>
			</div>
		</article>
	);
}

export default BlogBody;
