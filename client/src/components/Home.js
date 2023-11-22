import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Navbar from "./Navbar";
import { Container, Paper, Typography } from "@mui/material";
import Cats from "./Cats";
import { CatsContext } from "../context/cats";

function Home() {
  const { loggedIn } = useContext(UserContext);
  const { cats } = useContext(CatsContext);

  if (loggedIn) {
    return (
      <div className="home">
        <Navbar />
        <div className="welcome">
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Welcome to Kitty Connection, {user.first_name}
              </Typography>
            </Paper>
          </Container>
        </div>
        <Cats cats={cats} />
      </div>
    );
  } else {
    return (
      <div className="home">
        <Navbar />
        <div className="welcome">
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Welcome to Kitty Connection
              </Typography>
            </Paper>
          </Container>
          <Cats cats={cats} />
        </div>
      </div>
    );
  }
}

export default Home;
