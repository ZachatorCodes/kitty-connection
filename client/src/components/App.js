// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/user";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("/cats")
      .then((r) => r.json())
      .then((cats) => {
        console.log(cats);
        setCats(cats);
      });
  }, []);

  function handleDeleteCat(deletedCat) {
    const updatedCats = cats.filter((cat) => cat.id !== deletedCat.id);
    setCats(updatedCats);
  }

  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home cats={cats} onDeleteCat={handleDeleteCat}/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
