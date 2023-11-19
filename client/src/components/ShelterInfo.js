import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Card, CardHeader, Container, Paper, Typography } from "@mui/material";

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
        <Container maxWidth="sm">
          <Card>
            <CardHeader title={selectedShelter.name} subheader={`Located In: ${selectedShelter.city}`} />
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default ShelterInfo;
