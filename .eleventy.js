module.exports = function(eleventyConfig) {
  
    eleventyConfig.addWatchTarget("./src/styles/");
    // You can return your Config object (optional).
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
