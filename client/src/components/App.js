// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/user";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import CatInfo from "./CatInfo";
import Profile from "./Profile";
import ShelterPage from "./ShelterPage";
import ShelterInfo from "./ShelterInfo";

function App() {
  const [cats, setCats] = useState([]);
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    fetch("/cats")
      .then((r) => r.json())
      .then((cats) => {
        console.log(cats);
        setCats(cats);
      });
  }, []);

  useEffect(() => {
    fetch("/shelters")
      .then((r) => r.json())
      .then((shelters) => {
        console.log(shelters);
        setShelters(shelters);
      });
  }, []);

  function handleDeleteCat(deletedCat) {
    const updatedCats = cats.filter((cat) => cat.id !== deletedCat.id);
    setCats(updatedCats);
  }

  function handleUpdateCat(updatedCat) {
    const updatedCats = cats.map((cat) => {
      if (cat.id === updatedCat.id) {
        return updatedCat;
      } else {
        return cat;
      }
    });
    setCats(updatedCats);
  }

  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route
            exact
            path="/cats/:id"
            element={
              <CatInfo
                cats={cats}
                onUpdateCat={handleUpdateCat}
                onDeleteCat={handleDeleteCat}
              />
            }
          />
          <Route
            exact
            path="/shelters"
            element={<ShelterPage shelters={shelters} />}
          />
          <Route
            exact
            path="/shelters/:id"
            element={<ShelterInfo shelters={shelters} />}
          />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home cats={cats} />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
