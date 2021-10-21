const studentController = {};
const fs = require("fs");
const crypto = require("crypto");
let jsonData = fs.readFileSync("db.json", "utf8");
let objData = JSON.parse(jsonData);
const { generateRandomHexString } = require("../utilsHelper/ultils.helper");
studentController.getStudent = (req, res, next) => {
  const { age, name, limit } = req.query;
  try {
    if (Object.keys(req.query).length) {
      if (age && name) {
        const result = objData.filter(
          (student) =>
            student.age == age &&
            student.name.toUpperCase().includes(name.toUpperCase())
        );
        if (limit) {
          res.status(200).send(result.slice(0, limit));
        }
        res.status(200).send(result);
      }
      if (age) {
        const result = objData.filter((student) => student.age == age);
        if (limit) {
          res.status(200).send(result.slice(0, limit));
        }
        res.status(200).send(result);
      }
      if (name) {
        const result = objData.filter((student) =>
          student.name.toUpperCase().includes(name.toUpperCase())
        );
        if (limit) {
          res.status(200).send(result.slice(0, limit));
        }
        res.status(200).send(result);
      }
      if (limit) {
        console.log(limit);
        console.log(typeof limit);
        const result = objData.slice(0, limit);
        res.status(200).send(result);
      }
    } else {
      res.status(200).send(objData);
    }
  } catch (error) {
    next(error);
  }
};

studentController.createStudent = (req, res, next) => {
  const { age, name } = req.body;
  const id = generateRandomHexString(24);

  try {
    if (!age || !name) {
      res.status(400).send("Missing student's information");
    }
    const newStudentInfo = { id, name, age };
    objData.push(newStudentInfo);
    const newDataJson = JSON.stringify(objData);
    fs.writeFileSync("db.json", newDataJson);
    res.status(200).send(`Sucessfully create new student info`);
  } catch (error) {
    next(error);
  }
  res.status(200).send(req.body);
};
module.exports = studentController;
