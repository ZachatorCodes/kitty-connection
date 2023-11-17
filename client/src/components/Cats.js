import React from "react";
import { Grid } from "@mui/material";
import BuildCat from "./BuildCat";

function Cats({ cats, onDeleteCat }) {
  return (
    <div className="cats">
      <Grid container spacing={1}>
        {cats.map((cat) => (
          <BuildCat cat={cat} onDeleteCat={onDeleteCat}/>
        ))}
      </Grid>
    </div>
  );
}

export default Cats;
