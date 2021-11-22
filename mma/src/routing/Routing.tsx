import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllAthlete from "../pages/AllAthlete";
import MainNavigation from "../components/shared/MainNavigation";
import Home from "../pages/Home";
import AthleteDetailsPage from "../pages/AthleteDetailsPage";
import ArenaDetailsPage from "../pages/ArenaDetailsPage";
import AllArena from "../pages/AllArena";
import CreateNewArena from "../pages/CreateNewArena";
import CreateNewAthlete from "../pages/CreateNewAthlete";
import EditAthletePage from "../pages/EditAthletePage";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Container>
        <Routes>
          <Route path="/athletes" element={<AllAthlete />}></Route>
        </Routes>
        <Routes>
          <Route path="/create-athlete" element={<CreateNewAthlete />}></Route>
        </Routes>
        <Routes>
          <Route path="/athletes-details/:id" element={<AthleteDetailsPage />}
        ></Route>
        </Routes>
        <Routes>
          <Route path="/edit-athlete/:id" element={<EditAthletePage />}
        ></Route>
        </Routes>
        <Routes>
          <Route path="/arena" element={<AllArena />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/arena-details/:id" element={<ArenaDetailsPage />}
          ></Route>
          </Routes>
          <Routes>
          <Route path="/create-arena" element={<CreateNewArena />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
