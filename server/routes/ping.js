var express = require("express");
var router = express.Router();

router.post("/", function(req, res, next) {
  const teamName = req.body.teamName;

  if (
    teamName &&
    process.env.TEAM_NAME &&
    process.env.TEAM_NAME.indexOf(teamName) >= 0
  )
    res.status(200).send({ response: `${teamName} is part of the team!` });
  else
    res.status(400).send({
      response: `${teamName} is not part of the team. Modify your .env`
    });
});

module.exports = router;
