import React from "react";
import Navbar from "./Navbar";
import { Container, Paper, Typography } from "@mui/material";

function ShelterPage({ shelters }) {
  return (
    <div>
      <Navbar />
      <div className="shelter-page">
        <Container maxWidth="lg">
          <Paper elevation={3}>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              View Shelters
            </Typography>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default ShelterPage;
