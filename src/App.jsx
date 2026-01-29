import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;