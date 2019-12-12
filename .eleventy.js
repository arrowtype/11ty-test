module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/styles/");
    return {
        dir: {
            input: "src",
            output: "dist",
            // relative to 'input' (these are inside 'src')
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ['njk', 'md', 'scss', 'css', 'html', 'yml'],
        htmlTemplateEngine: "njk"
    };
  };
