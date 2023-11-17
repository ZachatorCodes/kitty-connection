import React, { useContext } from "react";
import { DeleteOutlined, Favorite, FavoriteRounded } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/user";

function BuildCat({ cat, onDeleteCat }) {
  const {user} = useContext(UserContext)
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

  function LoggedInHeader() {
    return (
      <CardHeader
        action={
          <IconButton onClick={handleClick}>
            <DeleteOutlined />
          </IconButton>
        }
        title={cat.name}
        subheader={cat.shelter.name}
      />
    );
  }

  function LoggedOutHeader() {
    return <CardHeader title={cat.name} subheader={cat.shelter.name} />;
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="cat-card">
        {user ? <LoggedInHeader/> : <LoggedOutHeader/>}
        <CardContent>
          <Typography>Age: {cat.age}</Typography>
          <Typography>Sex: {cat.sex === 1 ? "Male" : "Female"}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteRounded />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BuildCat;
