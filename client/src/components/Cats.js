import React from "react";
import { Grid } from "@mui/material";
import BuildCat from "./BuildCat";

function Cats({ cats, onDeleteCat }) {
  return (
    <div className="cats">
      <Grid container spacing={2}>
        {cats.map((cat, index) => (
          <BuildCat cat={cat} onDeleteCat={onDeleteCat} key={index}/>
        ))}
      </Grid>
    </div>
  );
}

export default Cats;
