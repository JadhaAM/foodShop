import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import AboutUs from './Components/About/AboutUs';
import Header from './Components/Header/Header';
import HeroPage from './Components/Hero/HeroPage';
import PopularPage from './Components/PopularPage/PopularPage';
import RecentlyPage from './Components/Recently/RecentlyPage';
import SubscribePage from './Components/Subscribe/SubscribePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/recently" element={<RecentlyPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
