const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const csv = require("express-csv");

app.get("/csv", (req, res) => {
  // fs.readFile(path.join(__dirname, "a.csv"), (err, file) => {
  //   if (!err) {
  //     res.setHeader("Content-disposition", 'inline; filename="result.csv"');
  //     res.set("Content-Type", "text/csv");
  //     res.status(200);
  //     res.send(file);
  //   }
  //   res.status(500).send();
  // });
  // res.sendFile(path.join(__dirname, "a.csv"), {
  //   headers: { "Content-disposition": 'inline; filename="result2.csv"', "Content-Type": "text/csv" }
  // });

  console.log("getting csv");
  res.set("Content-disposition", "attachment; filename=result5.csv");
  res.set("Content-Type", "text/csv");
  csv.separator = ",";
  res.csv([{ name: "joe3", id: 3 }]);
});

app.get("/json", (req, res) => {
  res.set("Content-disposition", "attachment; filename=result.json");
  res.set("Content-Type", "application/json");
  res.send({ name: "json", id: 2 });
});

app.listen(3000, console.log("Server listening on port 3000..."));
