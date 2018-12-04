const express = require("express");
const app = express();
// console.log("calculator");
//
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

app.get("/add/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) + parseInt(req.params.num2)
  let obj = {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    result: result
  };
  res.send(obj);
});

app.get("/subtract/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) - parseInt(req.params.num2);
  let obj = {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    result: result
  };
  res.send(obj);
});

app.get("/divide/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) / parseInt(req.params.num2);
  let obj = {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    result: result
  };
  res.send(obj);
});

app.get("/multiply/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) * parseInt(req.params.num2)
  let obj = {
    num1: req.params.num1,
    num2: req.params.num2,
    result: result
  };
  res.send(obj);
});

app.listen(9000, () => {
  console.log("You are listening to port 9000!");
});
