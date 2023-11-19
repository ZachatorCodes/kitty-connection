import React from "react";
import { Grid } from "@mui/material";
import BuildShelter from "./BuildShelter";

function Shelters({ shelters }) {
  return (
    <div className="shelters">
      <Grid container spacing={2}>
        {shelters.map((shelter, index) => (
          <BuildShelter shelter={shelter} key={index}/>
        ))}
      </Grid>
    </div>
  );
}

export default Shelters;
