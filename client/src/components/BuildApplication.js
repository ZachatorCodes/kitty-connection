import { Card, CardHeader, Grid, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function BuildApplication({ application }) {
  function handleDelete() {
    fetch(`/applications/${application.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        // PLACEHOLDER
      }
    });
  }

  if (application) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="application-card" elevation={5}>
          <CardHeader
            title={application.cat_name}
            subheader={application.shelter_name}
            action={
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            }
          />
        </Card>
      </Grid>
    );
  }
}

export default BuildApplication;
