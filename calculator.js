const express = require("express");
const app = express();
console.log("calculator");

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
app.get("/add/:num1/:num2", (req, res) => {
  let result = add(parseInt(req.params.num1) , parseInt(req.params.num2))
  let obj= {
    num1:parseInt(req.params.num1),
    num2:parseInt(req.params.num2),
    result: result
  }
  res.send(obj)
});

app.get("/sub/:num1/:num2", (req, res) => {
  res.send("You requested " + sub(req.params.num1, req.params.num2));
});

app.get("/mul/:num1/:num2", (req, res) => {
  res.send("You requested " + multiply(req.params.num1, req.params.num2));
});

app.get("/div/:num1/:num2", (req, res) => {
  res.send("You requested " + divide(req.params.num1, req.params.num2));
});

app.listen(9000, () => {
  console.log("You are listening to port (9000!");
});
