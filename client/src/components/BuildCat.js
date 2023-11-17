import React from "react";
import { DeleteOutlined, Favorite } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

function BuildCat({ cat, onDeleteCat }) {
  function handleClick() {
    console.log(`${cat.name} was clicked!`);
    fetch(`/cats/${cat.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteCat(cat);
      }
    });
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="cat-card">
        <CardHeader
          action={
            <IconButton onClick={handleClick}>
              <DeleteOutlined />
            </IconButton>
          }
          title={cat.name}
          subheader={cat.shelter.name}
        />
        <CardContent>
          <Typography>Age: {cat.age}</Typography>
          <Typography>Sex: {cat.sex === 1 ? "Male" : "Female"}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <Favorite />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BuildCat;
