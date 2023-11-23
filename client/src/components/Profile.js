import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Card, CardContent, CardHeader, Container, Paper, Typography } from "@mui/material";
import { UserContext } from "../context/user";
import Applications from "./Applications";

function Profile() {
  const { loggedIn, user } = useContext(UserContext);
  console.log(user)

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
              <CardHeader title={`${user.first_name} ${user.last_name} | ${user.username}`} subheader={user.email}/>
              <CardContent><Typography>{user.bio}</Typography></CardContent>
            </Card>
          </Container>
          <Container maxWidth="lg">
          <Paper elevation={3}>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              Active Adoption Applications
            </Typography>
          </Paper>
        </Container>
        <Applications applications={user.applications}/>
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
