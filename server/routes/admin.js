const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/user");

const adminLayout = "../views/layouts/admin";

router.get('/admin', async (req, res) => {
    try {
      const local = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
      }
  
      res.render('admin/index', { local, layout: adminLayout });
    } catch (error) {
      console.log(error);
    }
  });

router.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (req.body.username === "admin" && req.body.password === "password") {
      res.send("You are logged in.");
    } else {
      res.send("Wrong username or password");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
