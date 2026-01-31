import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Favorites from "./pages/Favorites";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar search={search} setSearch={setSearch} />

        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home search={search} favorites={favorites}
              setFavorites={setFavorites}/>}
            />
            <Route path="/movie/:id" element={<MovieDetails favorites={favorites}
              setFavorites={setFavorites} />} 
            />
            <Route path="/favorites" element={<Favorites favorites={favorites} 
              setFavorites={setFavorites}/>}
            />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
