// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/user";

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

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/testing" element={<h1>Test Route</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
