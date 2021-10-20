var express = require("express");
var router = express.Router();

// GET home page.
router.get("/", function (req, res, next) {
  res.send("Welcome your Simple CRUD API works");
});

// GET user route
// url: /api/student
const studentApi = require("./student.api");
router.use("/student", studentApi);

// GET user route
// url: /api/user
// const userRoute = require("./user.api");
// router.use("/user", userRoute);
module.exports = router;
