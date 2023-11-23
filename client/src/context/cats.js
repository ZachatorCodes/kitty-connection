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

  const onAddCat = (addedCat) => {
    const updatedCats = [...cats, addedCat];
    setCats(updatedCats);
  };

  const onDeleteCat = (deletedCat) => {
    const updatedCats = cats.filter((cat) => cat.id !== deletedCat.id);
    setCats(updatedCats);
  };

  const onUpdateCat = (updatedCat) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === updatedCat.id) {
        return updatedCat;
      } else {
        return cat;
      }
    });
    setCats(updatedCats);
  };

  return (
    <CatsContext.Provider
      value={{ cats, setCats, onAddCat, onDeleteCat, onUpdateCat }}
    >
      {children}
    </CatsContext.Provider>
  );
}

export { CatsContext, CatsProvider };
