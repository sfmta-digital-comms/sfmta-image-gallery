import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReactImageGallery from './pages/ReactImageGallery';
import ReactImageGrid from './pages/ReactImageGrid';
import ReactImageCustomGrid from './pages/ReactImageCustomGrid';
import ReactImageCustomGridNoBorder from './pages/ReactImageCustomGridNoBorder';
import './App.css';
import imageData from './imageData.json'; // Import image data

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home imageData={imageData} />} />
        <Route path="/image-gallery" element={<ReactImageGallery imageData={imageData} />} />
        <Route path="/image-grid" element={<ReactImageGrid imageData={imageData} />} />
        <Route path="/image-custom-grid" element={<ReactImageCustomGrid imageData={imageData} />} />
        <Route path="/image-custom-grid-no-border" element={<ReactImageCustomGridNoBorder imageData={imageData} />} />
        {/* Continue passing imageData as props to other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
