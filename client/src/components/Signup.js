import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(UserContext);
  const [errors, setErrors] = useState(null);
  const [userObj, setUserObj] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    bio: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted!", "\n", userObj);
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((r) => r.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/");
        }
        else {
          console.log(user)
          setErrors(user.errors)
        }
      });
  }

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setUserObj({
      ...userObj,
      [name]: value,
    });
  }

  return (
    <div>
      <Navbar />
      <div align="center">
        <Paper className="signup-container">
          <Typography variant="h3" className="signup-title">
            Signup
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              required
              variant="filled"
              name="first_name"
              label="First Name"
              value={userObj.first_name}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <TextField
              required
              variant="filled"
              name="last_name"
              label="Last Name"
              value={userObj.last_name}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <br />
            <TextField
              required
              variant="filled"
              name="email"
              label="Email"
              type="email"
              value={userObj.email}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <TextField
              required
              variant="filled"
              name="username"
              label="Username"
              autoComplete="username"
              value={userObj.username}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <br />
            <TextField
              required
              variant="filled"
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              value={userObj.password}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <TextField
              required
              variant="filled"
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              value={userObj.password_confirmation}
              onChange={handleChange}
              sx={{ margin: "5px" }}
            ></TextField>
            <br />
            <TextField
              variant="filled"
              name="bio"
              label="Bio"
              inputProps={{ maxLength: 150 }}
              value={userObj.bio}
              onChange={handleChange}
              sx={{ width: "71%", margin: "5px" }}
              multiline
              rows={4}
            ></TextField>
            <br />
            <Button type="submit" className="login-button" variant="contained">
              Sign Up
            </Button>
          </Box>
          {errors ? (
            <Alert severity="error" variant="filled" className="login-alert">
              {errors[0]}
            </Alert>
          ) : null}
        </Paper>
      </div>
    </div>
  );
}

export default Signup;
