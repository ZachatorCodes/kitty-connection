import React from "react";
import { Grid } from "@mui/material";
import BuildCat from "./BuildCat";

function Cats({ cats }) {
  return (
    <div className="cats">
      <Grid container spacing={2}>
        {cats.map((cat, index) => (
          <BuildCat cat={cat} key={index}/>
        ))}
      </Grid>
    </div>
  );
}

export default Cats;
