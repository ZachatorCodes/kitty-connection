import React from "react";
import { Grid } from "@mui/material";
import BuildCat from "./BuildCat";

function Cats({ cats }) {
  return (
    <div className="cats">
      <Grid container spacing={1}>
        {cats.map((cat) => (
          <BuildCat cat={cat} />
        ))}
      </Grid>
    </div>
  );
}

export default Cats;
