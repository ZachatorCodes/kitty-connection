// client/src/components/App.js
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/user";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import CatInfo from "./CatInfo";
import Profile from "./Profile";
import ShelterPage from "./ShelterPage";
import ShelterInfo from "./ShelterInfo";
import CreateCat from "./CreateCat";
import { CatsProvider } from "../context/cats";
import { SheltersProvider } from "../context/shelters";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <CatsProvider>
          <SheltersProvider>
            <Routes>
              <Route exact path="/cats/:id" element={<CatInfo />} />
              <Route exact path="/shelters" element={<ShelterPage />} />
              <Route exact path="/shelters/:id" element={<ShelterInfo />} />
              <Route exact path="/cats/new" element={<CreateCat />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/cats" element={<Home />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </SheltersProvider>
        </CatsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
