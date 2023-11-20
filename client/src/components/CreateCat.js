import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import {
  Alert,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/user";

function CreateCat({ shelters }) {
  const { loggedIn } = useContext(UserContext);
  const [errors, setErrors] = useState(null);
  const [catObj, setCatObj] = useState({
    name: "",
    age: 0,
    sex: 1,
    shelter_id: "",
  });

  const shelterOptions = shelters.map((shelter) => {
    return (
      <MenuItem key={shelter.id} value={shelter.id}>
        {shelter.name}
      </MenuItem>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    console.log(`NAME: ${e.target.name} | VALUE: ${e.target.value}`);

    const name = e.target.name;
    const value = e.target.value;

    setCatObj({
      ...catObj,
      [name]: value,
    });
  }

  if (loggedIn) {
    return (
      <div className="create-cat">
        <Navbar />
        <div className="create-cat-info" align="center">
          <Container maxWidth="md">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Add A Cat
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  required
                  variant="filled"
                  name="name"
                  label="Name"
                  value={catObj.name}
                  onChange={handleChange}
                  sx={{ margin: "5px" }}
                ></TextField>
                <TextField
                  required
                  variant="filled"
                  name="age"
                  label="Age"
                  value={catObj.age}
                  onChange={handleChange}
                  sx={{ margin: "5px" }}
                ></TextField>
                <RadioGroup
                  required
                  row
                  name="sex"
                  label="Sex"
                  value={catObj.sex}
                  onChange={handleChange}
                  sx={{ margin: "5px" }}
                >
                  <Container>
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value={2}
                      control={<Radio />}
                      label="Female"
                    />
                  </Container>
                </RadioGroup>
                <FormControl required variant="filled" sx={{ m: 1, minWidth: 250, margin: "5px"}}>
                  <InputLabel id="shelter-label">
                    Shelter
                  </InputLabel>
                  <Select
                    labelId="shelter-label"
                    name="shelter_id"
                    value={catObj.shelter_id}
                    onChange={handleChange}
                    label="Shelter"
                  >
                    {shelterOptions}
                  </Select>
                </FormControl>
                <br />
                <Button
                sx={{ margin: "5px"}}
                  type="submit"
                  className="login-button"
                  variant="contained"
                >
                  Log In
                </Button>
              </Box>
              {errors ? (
                <Alert
                  severity="error"
                  variant="filled"
                  className="login-alert"
                >
                  {errors}
                </Alert>
              ) : null}
            </Paper>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div className="create-cat">
        <Navbar />
        <div className="create-cat-info">
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Add A Cat
              </Typography>
            </Paper>
          </Container>
          <Container maxWidth="sm">
            <Card>
              <CardHeader title="Please Log In To Add A Cat" />
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default CreateCat;
