import { Card, CardActionArea, CardHeader, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function BuildShelter({ shelter }) {
  const navigate = useNavigate();

  function redirectToShelter() {
    navigate(`/shelters/${shelter.id}`)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="shelter-card" elevation={5}>
        <CardActionArea onClick={redirectToShelter}>
          <CardHeader title={shelter.name} subheader={shelter.city} />
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default BuildShelter;
