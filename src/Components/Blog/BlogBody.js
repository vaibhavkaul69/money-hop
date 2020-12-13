import React from "react";

function BlogBody() {
	const blogImage =
		"https://moneyhop.co/wp-content/uploads/2020/12/rupixen-com-Q59HmzK38eQ-unsplash-1200x800.jpg";
	const blog_thumbnails = [
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
		{
			url:
				"https://moneyhop.co/blog/7-common-financial-mistakes-made-by-indians/",

			title: "7 Common Financial Mistakes made by Indians",
			description:
				"India is one among the fastest developing economies across the world but the financial literacy amongst…",
		},
	];
	return (
		<article className="blog-body">
			<div className=" blog-thumbnail-grid container">
				{blog_thumbnails.map((item) => {
					return (
						<div className="blog-thumbnail-grid__item">
							<img src={blogImage} alt="Blog Image" />
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
		</article>
	);
}

export default BlogBody;
