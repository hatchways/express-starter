var express = require("express");
var router = express.Router();

router.get("/welcome", function(req, res, next) {
  res
    .status(200)
    .send({ welcomeMessage: `Welcome, team ${process.env.TEAM_NAME}!` });
});

module.exports = router;
