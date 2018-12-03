const express = require("express");
// console.log(express);
const app = express();
// console.log(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main.html");
});

app.get("/api/people", (req, res) => {
  const people = [{ name: "Corey", age: 100 }, { name: "Andres", age: 28 }];
  res.json(people);
});

app.get("/profile/:id", (req, res) => {
  // console.log(req.params);
  // res.send('you request profile ' + req.params.id)
  res.send(req.params.id + " is our favorite user" )
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});


app.get("/*", (req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.post("/", (req, res) => {
  res.send("got a POST request");
});

app.put("/user", (req, res) => {
  res.send("got a PUT request");
});

app.delete("/user", (req, res) => {
  res.send("got a DELETE request at /user");
});

app.listen(3000, () => {
  console.log("You are listening to port 3000!");
});
