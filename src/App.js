import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AnimeContextProvider } from './context/AnimeContext';
import { Home } from './pages/Home';
import { Anime } from './components/Anime'


function App() {
  return (
    <Router>
      <AnimeContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime-infos" element={<Anime />} />
        </Routes>
      </AnimeContextProvider>
    </Router>
  );
}

export default App;
