import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Navbar from "./Navbar";

function Home({ cats }) {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <div className="home">
        <Navbar />
        <div className="welcome">
          <h1>Welcome to Kitty Connection, {user.first_name}</h1>
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
