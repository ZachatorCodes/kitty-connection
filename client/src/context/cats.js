// Import necessary libraries
import React, { useState, useEffect, createContext } from "react";

// Create Context Object
const CatsContext = createContext();

// Create Provider Component
function CatsProvider({ children }) {
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
    <CatsContext.Provider value={{ cats }}>{children}</CatsContext.Provider>
  );
}

export { CatsContext, CatsProvider };
