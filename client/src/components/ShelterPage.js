import React from "react";
import Navbar from "./Navbar";
import { Container, Paper, Typography } from "@mui/material";
import Shelters from "./Shelters";

function ShelterPage({ shelters }) {
  return (
    <div className="shelter-page">
      <Navbar />
      <div className="shelter-info">
        <Container maxWidth="lg">
          <Paper elevation={3}>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              View Shelters
            </Typography>
          </Paper>
        </Container>
      </div>
      <Shelters shelters={shelters} />
    </div>
  );
}

export default ShelterPage;
