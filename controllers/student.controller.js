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

<<<<<<< HEAD
//   try {
//     if (!age || !name) {
//       res.status(400).send("Missing student's information");
//     }
//     const newStudentInfo = { id, name, age };
//     console.log(newStudentInfo);
//     const newStudentInfoJson = JSON.stringify(newStudentInfo);
//     fs.writeFileSync("db.json", newStudentInfoJson, { flag: "a" });
//     res.status(200).send(`Sucessfully create new student info`);
//   } catch (error) {
//     next(error);
//   }
//   res.status(200).send(req.body);
// };

studentController.deleteStudent = (req, res, next) => {
  const {id} = req.params;
  console.log(id);
  try{
    //read the file => return JSON
    const database = fs.readFileSync("db.json", "utf8"); 
    //trans to JS object
    const jsonObject = JSON.parse(database);
    console.log(jsonObject.data);
    //remove all id match 
    const afterFilter = jsonObject.filter((e) => e.id !==id);
    //trans to JSON 
    const newData = JSON.stringify(afterFilter);
    //then writie to DBJSON
    fs.writeFileSync("db.json", newData);
    // console.log(jsonObject)

    return res.status(200).send(`successfully delete id ${id}`)

   }
   catch(error){
   next(error);
   };
}
=======
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
>>>>>>> 3503fbc4f10b6d37d7afeca47153c35be28bcb9a
module.exports = studentController;
