import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Card, CardHeader, Container, Paper, Typography } from "@mui/material";

function CatInfo({ cats }) {
  const { id: catID } = useParams();
  const selectedCat = cats.find((cat) => cat.id === parseInt(catID));
  console.log(selectedCat);
  if (selectedCat) {
    return (
      <div className="cat-info">
        <Navbar />
        <Container>
          <Paper>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              Cat Information
            </Typography>
          </Paper>
        </Container>
        <Container maxWidth="sm">
          <Card>
            <CardHeader title={selectedCat.name} />
          </Card>
        </Container>
      </div>
    );
  }
}

export default CatInfo;
