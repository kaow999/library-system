var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  //   const TOKEN = process.env.TOKEN;
  const TOKEN = "TOKEN";
  res.send({ token: TOKEN });
});

module.exports = router;
