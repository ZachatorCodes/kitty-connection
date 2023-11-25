import { Card, CardHeader, Grid, IconButton } from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CatsContext } from "../context/cats";
import { UserContext } from "../context/user";

function BuildApplication({ application }) {
  const { cats, setCats } = useContext(CatsContext);
  const { setUser, user } = useContext(UserContext);
  const selectedCat = cats.find((cat) => cat.id === application.cat_id);

  // handles the fetch request and state management of application deletion
  function handleDelete() {
    fetch(`/applications/${application.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        const filteredApplications = user.applications.filter(
          (userApp) => application.id !== userApp.id
        );
        const updatedCats = cats.map((cat) => {
          if (cat.id === selectedCat.id) {
            return {
              ...cat,
              applications: filteredApplications,
            };
          } else {
            return cat;
          }
        });
        setUser({
          ...user,
          applications: filteredApplications,
        });
        setCats(updatedCats);
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
