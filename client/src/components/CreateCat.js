import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Card, CardHeader, Container, Paper, Typography } from "@mui/material";
import { UserContext } from "../context/user";

function CreateCat({ shelters }) {
  const { loggedIn } = useContext(UserContext);
  if (loggedIn) {
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
