const express = require("express");
const router = express.Router();
const Post = require("../models/post");

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

// HOW DOES THE CODE KNOW THAT :ID IS WHERE THE SLUG GOES
router.get("/post/:id", async (req, res) => {
  const local = {
    title: "Careers Page",
    description: "Career opportunities",
  };

  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    res.render("post", { local, data });
  } catch (error) {
    console.log(error);
  }
});

router.post("/search", async (req, res) => {
  const local = {
    title: "Searching...",
    description: "Searching...",
  };

  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });

    res.render("search", { local, data });
  } catch (error) {
    console.log(error);
  }
});

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
