import { FormControl, TextField, Button, Typography } from "@material-ui/core";

import React, { useState } from "react";

function Ping() {
  const [result, setResult] = useState("Enter your team name");
  const [answer, setAnswer] = useState("");

  const submitAnswer = () => {
    console.log("run");
    fetch("/ping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ teamName: answer })
    }).then(res =>
      res.json().then(res => {
        setResult(res.response);
      })
    );
  };
  return (
    <div>
      <Typography>{result}</Typography>

      <FormControl>
        <TextField onChange={e => setAnswer(e.target.value)} />
      </FormControl>
      <Button onClick={submitAnswer}>Submit</Button>
    </div>
  );
}

export default Ping;
