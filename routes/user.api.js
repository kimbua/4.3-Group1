const express = require("express");
const router = express.Router();
const fs = require("fs");

// POST
// url: /api/user
// access: public
// description: create user
router.post("/", (req, res, next) => {
  console.log("creating a file");
  console.log(req.body);
  const content = req.body;
  try {
    const jsonContent = JSON.stringify(content);
    fs.writeFileSync("db.json", jsonContent);
    return res.status(200).send("Create file success");
  } catch (error) {
    next(error);
  }
});

// PUT
// url: /api/user
// access: Public
// description: update user
router.use("/", (req, res, next) => {
  console.log(req.body);
  res.status(200).send("Update file success");
  try {
    let newContent = req.body;
    let jsonContent = JSON.stringify(newContent);
    fs.appendFileSync("db.json", jsonContent);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
