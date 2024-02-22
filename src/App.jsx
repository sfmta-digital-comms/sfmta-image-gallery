import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReactImageGallery from './pages/ReactImageGallery';
import ReactImageGrid from './pages/ReactImageGrid';
import ReactImageCustomGrid from './pages/ReactImageCustomGrid';
import ReactImageCustomGridNoBorder from './pages/ReactImageCustomGridNoBorder';
import './App.css';
// Import other pages

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-gallery" element={<ReactImageGallery />} />
        <Route path="/image-grid" element={<ReactImageGrid />} />
        <Route path="/image-custom-grid" element={<ReactImageCustomGrid />} />
        <Route path="/image-custom-grid-no-border" element={<ReactImageCustomGridNoBorder />} />
        {/* Define routes for other pages */}
      </Routes>
    </div>
  );
}

export default App;
