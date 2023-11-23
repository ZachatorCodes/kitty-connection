import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CatUpdateForm from "./CatUpdateForm";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../context/user";
import { Button } from "@mui/material";
import { CatsContext } from "../context/cats";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CatInfo() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(null);
  const { cats, onDeleteCat, setCats } = useContext(CatsContext);
  const navigate = useNavigate();
  const { id: catID } = useParams();
  const { loggedIn, user, setUser } = useContext(UserContext);
  const selectedCat = cats.find((cat) => cat.id === parseInt(catID));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleDelete() {
    console.log(`${selectedCat.name} was clicked!`);
    fetch(`/cats/${selectedCat.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteCat(selectedCat);
        navigate("/");
      }
    });
  }

  console.log(selectedCat);

  function redirectToShelter() {
    navigate(`/shelters/${selectedCat.shelter.id}`);
  }

  function LoggedInHeader() {
    return (
      <CardHeader
        title={selectedCat.name}
        subheader={selectedCat.shelter.name}
        action={
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
      />
    );
  }

  function LoggedOutHeader() {
    return (
      <CardHeader
        title={selectedCat.name}
        subheader={selectedCat.shelter.name}
      />
    );
  }

  function handlePostApplication() {
    fetch("/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cat_id: selectedCat.id,
        user_id: user.id,
        cat_name: selectedCat.name,
        shelter_name: selectedCat.shelter.name
      }),
    })
      .then((r) => r.json())
      .then((application) => {
        console.log(application);
        if (!application.errors) {
          setSuccess(true);
          setErrors(null);
          const updatedCats = cats.map((cat) => {
            if (cat.id === selectedCat.id) {
              return {
                ...selectedCat,
                applications: [...selectedCat.applications, application],
              };
            } else {
              return cat;
            }
          });
          setUser({
            ...user,
            applications: [...user.applications, application],
          });
          setCats(updatedCats);
        } else {
          setErrors(application.errors);
          setSuccess(false);
        }
      });
  }

  if (selectedCat) {
    return (
      <div className="cat-info">
        <Navbar />
        <Container>
          <Paper>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              Cat Information
            </Typography>
          </Paper>
        </Container>
        <Container maxWidth="sm">
          <Card>
            {loggedIn ? <LoggedInHeader /> : <LoggedOutHeader />}
            <CardContent>
              <Typography>Age: {selectedCat.age}</Typography>
              <Typography>
                Sex: {selectedCat.sex === 1 ? "Male" : "Female"}
              </Typography>
              {loggedIn ? (
                <>
                  <br />
                  <Typography>
                    To edit cat information, please expand the drawer below
                    using the arrow in the bottom right.
                  </Typography>
                </>
              ) : null}
            </CardContent>
            {loggedIn ? (
              <>
                <CardActions disableSpacing>
                  <Button
                    onClick={redirectToShelter}
                    size="small"
                    variant="contained"
                    sx={{ margin: "5px" }}
                  >
                    Visit Shelter
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ margin: "5px" }}
                    onClick={handlePostApplication}
                  >
                    Apply To Adopt
                  </Button>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                {errors ? (
                  <Alert
                    severity="error"
                    variant="filled"
                    className="application-failed"
                  >
                    {errors[0]}
                  </Alert>
                ) : null}
                {success ? (
                  <Alert
                    severity="success"
                    variant="filled"
                    className="application-submitted"
                  >
                    Application successfully submitted
                  </Alert>
                ) : null}
                <Divider />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <CatUpdateForm
                      cat={selectedCat}
                      expanded={expanded}
                      setExpanded={setExpanded}
                    />
                  </CardContent>
                </Collapse>
              </>
            ) : (
              <CardActions disableSpacing>
                <Button
                  onClick={redirectToShelter}
                  size="small"
                  variant="contained"
                >
                  Visit Shelter
                </Button>{" "}
              </CardActions>
            )}
          </Card>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="cat-info">
        <Navbar />
        <Container>
          <Paper>
            <Typography padding="3px" margin="24px" align="center" variant="h3">
              Cat Information
            </Typography>
          </Paper>
        </Container>
        <Container maxWidth="sm">
          <Card>
            <CardHeader align="center" title="Cat Not Found. Sorry!" />
          </Card>
        </Container>
      </div>
    );
  }
}

export default CatInfo;
