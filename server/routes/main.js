const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const local = {
    title: "Home Page",
    description: "Welcome to my home page",
  };
  res.render("index", { local });
});

router.get("/contact", (req, res) => {
  const local = {
    title: "Contact Page",
    description: "Contact me at my email",
  };

  res.render("contact", { local });
});

router.get("/about", (req, res) => {
  const local = {
    title: "About Page",
    description: "About Me!",
  };
  res.render("about", { local });
});

module.exports = router;
