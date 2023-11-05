// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("images"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/index"));
app.use(require("./controllers/sign_in"));
app.use(require("./controllers/api/death"));
app.use(require("./controllers/api/story"));
app.use(require("./controllers/api/winner"));
app.use("/images", express.static(path.join(__dirname, "/public/images")));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
