import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function BuildCat({ cat }) {
  const navigate = useNavigate();

  function redirectToCat() {
    console.log("CAT ID: ", cat.id);
    navigate(`/cats/${cat.id}`);
  }

  if (cat.shelter) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="cat-card" elevation={5}>
          <CardActionArea onClick={redirectToCat}>
            <CardHeader title={cat.name} subheader={cat.shelter.name} />
            <CardContent>
              <Typography>Age: {cat.age}</Typography>
              <Typography>Sex: {cat.sex === 1 ? "Male" : "Female"}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="cat-card" elevation={5}>
          <CardActionArea onClick={redirectToCat}>
            <CardHeader title={cat.name} />
            <CardContent>
              <Typography>Age: {cat.age}</Typography>
              <Typography>Sex: {cat.sex === 1 ? "Male" : "Female"}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default BuildCat;
