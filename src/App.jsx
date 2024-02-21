import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReactImageGallery from './pages/ReactImageGallery';
import ReactImageGrid from './pages/ReactImageGrid';
// Import other pages

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-gallery" element={<ReactImageGallery />} />
        <Route path="/image-grid" element={<ReactImageGrid />} />
        {/* Define routes for other pages */}
      </Routes>
    </div>
  );
}

export default App;
