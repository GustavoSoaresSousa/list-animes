import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AnimeContextProvider } from './context/AnimeContext'
import { Home } from './pages/Home'


function App() {
  return (
    <Router>
      <AnimeContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimeContextProvider>
    </Router>
  );
}

export default App;
