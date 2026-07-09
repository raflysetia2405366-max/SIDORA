import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MapPage from "./pages/MapPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <main className="main-content">

          <Routes>
            <Route
              path="/map"
              element={<MapPage />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;