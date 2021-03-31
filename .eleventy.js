const path = require("path");
const prettier = require("prettier");

module.exports = function (config) {
  // Customised filters
  config.addFilter("first", (name) => name.split(" ")[0]);

  // Passthrough files
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy("src/css");

  // Tidy output files
  config.addTransform("prettier", function (content, outputPath) {
    const extname = path.extname(outputPath);
    switch (extname) {
      case ".html":
      case ".json":
        // Strip leading period from extension and use as the Prettier parser.
        const parser = extname.replace(/^./, "");
        return prettier.format(content, { parser });

      default:
        return content;
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
