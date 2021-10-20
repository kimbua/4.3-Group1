var express = require("express");
var router = express.Router();

// GET
// url: /api/student
// access: public
// description: get list of students
const {
  getStudent,
  createStudent,
} = require("../controllers/student.controller");
router.get("/", getStudent);

// POST
// url: /api/student
// access: public
// description: create students
router.post("/", createStudent);

module.exports = router;
