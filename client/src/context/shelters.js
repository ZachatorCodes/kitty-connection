// Import necessary libraries
import React, { useState, useEffect, createContext } from "react";

// Create Context Object
const SheltersContext = createContext();

// Create Provider Component
function SheltersProvider({ children }) {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    fetch("/shelters")
      .then((r) => r.json())
      .then((shelters) => {
        setShelters(shelters);
      });
  }, []);

  return (
    <SheltersContext.Provider value={{ shelters, setShelters }}>
      {children}
    </SheltersContext.Provider>
  );
}

export { SheltersContext, SheltersProvider };
