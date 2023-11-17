import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CatInfo({ cats }) {
  const { id: catID } = useParams();
  const selectedCat = cats.find((cat) => cat.id === parseInt(catID));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(selectedCat);

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
            <CardHeader title={selectedCat.name} subheader={selectedCat.shelter.name}/>
            <CardContent>
              <Typography>Age: {selectedCat.age}</Typography>
              <Typography>Sex: {selectedCat.sex === 1 ? "Male" : "Female"}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>Hello!</Typography>
              </CardContent>
            </Collapse>
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
