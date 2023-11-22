import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Alert, Button, Paper } from "@mui/material";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [errors, setErrors] = useState(null);
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
    console.log("Form Submitted!", "\n", userInfo);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => {
        if (!user.error) {
          login(user);
          navigate("/");
        } else {
          setErrors(user.error);
        }
      });
  }

  return (
    <div className="login">
      <Navbar />
      <div align="center">
        <Paper className="login-container">
          <Typography variant="h3" className="login-title">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              required
              variant="filled"
              name="username"
              label="Username"
              autoComplete="username"
              value={userInfo.username}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <br />
            <TextField
              required
              variant="filled"
              name="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              value={userInfo.password}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <br />
            <Button type="submit" className="login-button" variant="contained">
              Log In
            </Button>
          </Box>
          {errors ? (
            <Alert severity="error" variant="filled" className="login-alert">
              {errors}
            </Alert>
          ) : null}
        </Paper>
      </div>
    </div>
  );
}

export default Login;
