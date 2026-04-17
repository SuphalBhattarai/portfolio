module.exports = function (eleventyConfig) {
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
