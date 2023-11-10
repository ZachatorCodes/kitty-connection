import React, { useState, useEffect, createContext } from "react";

// Create Context
const UserContext = createContext();

// Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setLoggedIn(false);
        } else {
          setUser(data);
          setLoggedIn(true);
        }
      });
  }, []);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, login, logout, signup, loggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
