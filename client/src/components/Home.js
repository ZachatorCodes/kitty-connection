import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Navbar from "./Navbar";
import { Card, Paper } from "@mui/material";
import Cats from "./Cats";

function Home({ cats, onDeleteCat }) {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <div className="home">
        <Navbar />
        <div className="welcome">
          <Paper>
            <h1>Welcome to Kitty Connection, {user.first_name}</h1>
          </Paper>
          <Cats cats={cats} onDeleteCat={onDeleteCat}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home">
        <Navbar />
        <div className="welcome">
          <h1>Welcome to Kitty Connection</h1>
        </div>
      </div>
    );
  }
}

export default Home;
