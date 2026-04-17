module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/assets/css": "css" });
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });
    eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
    eleventyConfig.addPassthroughCopy({ "src/assets/documents": "documents" });
    eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
    eleventyConfig.addWatchTarget("./src/assets/css/");
    eleventyConfig.addWatchTarget("./src/assets/js/");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist"
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
