import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar search={search} setSearch={setSearch} />

        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home search={search}/>} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
