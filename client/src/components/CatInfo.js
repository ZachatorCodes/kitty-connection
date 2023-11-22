import React, { useContext } from "react";
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
  const { cats, onDeleteCat } = useContext(CatsContext);
  const navigate = useNavigate();
  const { id: catID } = useParams();
  const { loggedIn } = useContext(UserContext);
  const selectedCat = cats.find((cfat) => cat.id === parseInt(catID));

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
                  <Button onClick={redirectToShelter} size="small">
                    Visit Shelter
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
                <Button onClick={redirectToShelter} size="small">
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
