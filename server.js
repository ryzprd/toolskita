
require("dotenv").config();
const express = require("express");
const path = require("path");
const tools = require("./data/tools.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", { tools });
});

app.get("/tools/:slug", (req, res) => {
  const tool = tools.find(t => t.slug === req.params.slug);
  if (!tool) return res.status(404).render("404");
  res.render("tool", { tool });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
