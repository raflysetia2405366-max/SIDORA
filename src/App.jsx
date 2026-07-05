import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import Profile from "./pages/Profile";
import Potential from "./pages/Potential";
import Service from "./pages/Service";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/map"
              element={<MapPage />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/potential"
              element={<Potential />}
            />

            <Route
              path="/service"
              element={<Service />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;