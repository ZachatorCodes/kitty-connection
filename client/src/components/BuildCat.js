import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";

function BuildCat({ cat }) {
  const { loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  function redirectToCat() {
    console.log("CAT ID: ", cat.id);
    navigate(`/cats/${cat.id}`);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="cat-card" elevation={5}>
        <CardHeader title={cat.name} subheader={cat.shelter.name} />
        <CardContent>
          <Typography>Age: {cat.age}</Typography>
          <Typography>Sex: {cat.sex === 1 ? "Male" : "Female"}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={redirectToCat}>View More</Button>
          {/* {loggedIn ? <Button onClick={handleDelete}>Delete</Button> : null} */}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BuildCat;
