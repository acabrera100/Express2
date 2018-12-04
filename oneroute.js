app.get("/:operator/:num1/:num2", (req, res) => {
  let result = (parseInt(req.params.num1), parseInt(req.params.num2));
function oneRoute(){
  if (req.operator === "add") {
    return add(parseInt(req.params.num1) , parseInt(req.params.num2));
  } else if (req.operator === "sub") {
    return sub(parseInt(req.params.num1) - parseInt(req.params.num2));
  } else if ("operator" === "mul") {
    return parseInt(req.params.num1) * parseInt(req.params.num2);
  } else if ("operator" === "div") {
    return parseInt(req.params.num1) / parseInt(req.params.num2);
  }
}
  let obj = {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    result: result
  };
  res.send(oneRoute(.operator));
});
