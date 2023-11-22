import React, { useContext } from "react";
import { Grid } from "@mui/material";
import BuildShelter from "./BuildShelter";
import { SheltersContext } from "../context/shelters";

function Shelters() {
  const { shelters } = useContext(SheltersContext);

  return (
    <div className="shelters">
      <Grid container spacing={2}>
        {shelters.map((shelter, index) => (
          <BuildShelter shelter={shelter} key={index} />
        ))}
      </Grid>
    </div>
  );
}

export default Shelters;
