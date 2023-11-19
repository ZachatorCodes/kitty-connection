import { Card, CardActionArea, CardHeader, Grid } from "@mui/material";
import React from "react";

function BuildShelter({ shelter }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="shelter-card" elevation={5}>
        <CardActionArea>
          <CardHeader title={shelter.name} subheader={shelter.city} />
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default BuildShelter;
