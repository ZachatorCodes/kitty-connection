import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Card } from "@mui/material";

function Login() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "Form Submitted!", "\n", userInfo
    );
  }

  return (
    <div className="login" align="center">
      <Card className="login-form">
        <Typography variant="h4">Log In</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            required
            variant="filled"
            name="username"
            label="Username"
            value={userInfo.username}
            onChange={handleChange}
            sx={{ margin: "10px" }}
          ></TextField>
          <br />
          <TextField
            required
            variant="filled"
            name="password"
            label="Password"
            value={userInfo.password}
            onChange={handleChange}
            sx={{ margin: "10px" }}
          ></TextField>
          <br />
          <Button type="submit">Log In</Button>
        </Box>
      </Card>
    </div>
  );
}

export default Login;
