import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Paper, Typography } from "@mui/material";

function ShelterInfo({ shelters }) {
  const { id: shelterID } = useParams();
  
  const selectedShelter = shelters.find(
    (shelter) => shelter.id === parseInt(shelterID)
  );

  return (
    <div className="shelter-page">
      <Navbar />
      <div className="shelter-info">
        <Container maxWidth="lg">
          <Paper elevation={3}>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              Shelter Information
            </Typography>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

export default ShelterInfo;
