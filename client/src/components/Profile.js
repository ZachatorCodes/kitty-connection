import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Card, CardHeader, Container, Paper, Typography } from "@mui/material";
import { UserContext } from "../context/user";

function Profile() {
  const { loggedIn, user } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <Navbar />
        <div>
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Profile
              </Typography>
            </Paper>
          </Container>
          <Container maxWidth="sm">
            <Card>
              <CardHeader title={`${user.first_name} ${user.last_name}`} />
            </Card>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div>
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Profile
              </Typography>
            </Paper>
          </Container>
          <Container maxWidth="sm">
            <Card>
              <CardHeader title={"Please login to view profile"} />
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
