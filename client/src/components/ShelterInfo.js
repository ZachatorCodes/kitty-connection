import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Card, CardHeader, Container, Paper, Typography } from "@mui/material";
import Cats from "./Cats";

function ShelterInfo({ shelters }) {
  const { id: shelterID } = useParams();

  const selectedShelter = shelters.find(
    (shelter) => shelter.id === parseInt(shelterID)
  );

  console.log(selectedShelter);

  if (selectedShelter) {
    return (
      <div className="shelter-page">
        <Navbar />
        <div className="shelter-info">
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Shelter Information
              </Typography>
            </Paper>
          </Container>
          <Container maxWidth="sm">
            <Card>
              <CardHeader
                title={selectedShelter.name}
                subheader={`Located In: ${selectedShelter.city}`}
              />
            </Card>
          </Container>
        </div>
        <Container maxWidth="lg">
          <Paper elevation={3}>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              Adoptable Cats
            </Typography>
          </Paper>
        </Container>
        <Container>
          {selectedShelter.cats ? (
            <Cats cats={selectedShelter.cats} />
          ) : (
            <Container maxWidth="sm">
              <Card align="center">
                <CardHeader title="No Cats Available At This Shelter. Sorry!" />
              </Card>
            </Container>
          )}
        </Container>
      </div>
    );
  } else {
    return (
      <div className="shelter-page">
        <Navbar />
        <div className="shelter-info">
          <Container maxWidth="lg">
            <Paper elevation={3}>
              <Typography
                padding="3px"
                margin="24px"
                align="center"
                variant="h3"
              >
                Shelter Information
              </Typography>
            </Paper>
          </Container>
          <Container maxWidth="sm">
            <Card>
              <CardHeader title="That shelter doesn't exist. Sorry!" />
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default ShelterInfo;
