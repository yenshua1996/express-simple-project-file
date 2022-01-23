const express = require("express");
const games = require("./routes");
const app = express();

const topLevelMiddleware = (req, res, next) => {
  console.log("Top level middleware!");
  next();
};

const validationFn = (req, res, next) => {
  console.log("Checking your data!");
  next();
};

//Application level middleware
app.use(topLevelMiddleware);

//Modular Router
app.use("/games", games);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Router level middleware
app.post("/add", validationFn, (req, res) => {
  res.json({ item: "Added Item!" });
});

app.listen(3000, () => {
  console.log("Listening to localhost/3000");
});
