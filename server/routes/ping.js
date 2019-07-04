var express = require("express");
var router = express.Router();

router.post("/", function(req, res, next) {
  console.log(req.body);
  const teamName = req.body.teamName;
  if (teamName === process.env.TEAM_NAME)
    res.status(200).send({ response: `${teamName} is correct!` });
  else res.status(400).send({ response: `${teamName} is  incorrect` });
});

module.exports = router;
