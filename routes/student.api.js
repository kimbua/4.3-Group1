var express = require("express");
var router = express.Router();

// GET
// url: /api/student
// access: public
// description: get list of students
const {
  getStudent,
  createStudent,
  deleteStudent,
} = require("../controllers/student.controller");
// router.get("/", getStudent);

// POST
// url: /api/student
// access: public
// description: create students
// router.post("/", createStudent);

//router delete by id
router.delete("/:id", deleteStudent);
module.exports = router;
