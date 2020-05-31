const path = require("path");

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: "./src/app.js", // string | object | array
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "main.js", // string
  },
};
