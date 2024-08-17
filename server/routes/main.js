const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const CarData = require("../models/car");

router.get("", async (req, res) => {
  const local = {
    title: "Home Page",
    description: "Welcome to my home page",
  };

  try {
    const data = await Post.find();
    res.render("index", { local, data });
  } catch (error) {
    console.log(error);
  }
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

router.get("/careers", (req, res) => {
  const local = {
    title: "Careers Page",
    description: "Career opportunities",
  };
  res.render("careers", { local });
});

// function insertCarDataTest() {
//   CarData.insertMany([
//     { make: "Lamborghini", model: "Aventador", year: 2022, mileage: 1500 },
//     { make: "Ferrari", model: "488 GTB", year: 2021, mileage: 5000 },
//     { make: "Porsche", model: "911 Turbo S", year: 2023, mileage: 1200 },
//   ]);
// }

// insertCarDataTest();

// function insertPostData () {
//   Post.insertMany([
//     {
//       title: "Building APIs with Node.js",
//       body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
//     }
//   ])
// }

// insertPostData();

module.exports = router;
