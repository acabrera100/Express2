const express = require("express");
const app = express();

const rock = [
  { user: "rock", ai: "rock", result: "tie" },
  { user: "rock", ai: "paper", result: "lose" },
  { user: "rock", ai: "scissors", result: "win" }
];
const paper = [
  { user: "paper", ai: "rock", result: "win" },
  { user: "paper", ai: "paper", result: "tie" },
  { user: "paper", ai: "scissors", result: "lose" }
];
const scissors = [
  { user: "scissors", ai: "rock", result: "lose" },
  { user: "scissors", ai: "paper", result: "win" },
  { user: "scissors", ai: "scissors", result: "tie" }
];

function chooseOne(array){
  return array[Math.floor(Math.random()*3)]

}
app.get("/rock", (req, res) => {
  res.send(chooseOne(rock));
});

app.get("/paper", (req, res) => {
  res.send(chooseOne(paper));
});

app.get("/scissors", (req, res) => {
  res.send(chooseOne(scissors));
});

app.listen(8000, () => {
  console.log("You are listening to port 8000!");
});
