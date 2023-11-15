import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Alert, Button, Card } from "@mui/material";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

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
          setErrors(user.error)
        }
      });
  }

  return (
    <div className="login" align="center">
      <Card className="login-container">
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
        {errors ? (
          <Alert severity="error" variant="filled">
            {errors}
          </Alert>
        ) : null}
      </Card>
    </div>
  );
}

export default Login;
