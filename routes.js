const express = require("express");
const router = express.Router();

//Top level router middleware
router.use((req, res, next) => {
  console.log("Top level router middleware");
  next();
});

router.get("/", (req, res) => {
  res.json({ msg: "We offer the best games you can imagine!" });
});

router.get("/action", (req, res) => {
  res.json({ msg: "We have a ton of action games in our catalogue!" });
});

router.get("/search/:name", (req, res) => {
  res.json({ result: `We have ${req.params.name} in our catalogue!` });
});

module.exports = router;
