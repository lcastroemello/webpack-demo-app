const path = require("path");

module.exports = {
  mode:"development",
  entry: "./src/index.js",
  output:{
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
  // This output creates a file called main.js inside a directory called dist to be our output. It can have any name
};
