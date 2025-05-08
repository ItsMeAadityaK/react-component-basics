import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Counter from './Counter';

const App = () => (
  <BrowserRouter>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
