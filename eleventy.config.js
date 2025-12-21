const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(rssPlugin);
	eleventyConfig.addPassthroughCopy("src/robots.txt");
	eleventyConfig.addPassthroughCopy("src/llms.txt");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return dateObj.toISOString().split('T')[0];
	});

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	});

	eleventyConfig.addFilter("getYear", (dateObj) => {
		return dateObj.getFullYear();
	});

	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			layouts: "_includes/layouts"
		}
	};
};
