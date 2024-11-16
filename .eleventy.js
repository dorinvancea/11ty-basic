module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles/main.css");

  return {
    dir: {
      input: "src",
      output: "output",
    },
  };
};
