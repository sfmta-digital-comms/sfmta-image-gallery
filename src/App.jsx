import React from 'react';
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReactImageGallery from './pages/ReactImageGallery';
import ReactImageGrid from './pages/ReactImageGrid';
import ReactImageCustomGrid from './pages/ReactImageCustomGrid';
import ReactImageCustomGridNoBorder from './pages/ReactImageCustomGridNoBorder';
import './App.css';
import imageData from './imageData.json'; // Import image data

function sendHeightToParent() {
  let height = document.body.scrollHeight;
  window.parent.postMessage({
    frameHeight: height,
    frameId: 'appIframeID' // Make sure to use the actual ID of your iframe
  }, '*');
}

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      sendHeightToParent();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sendHeightToParent();

    const handleResize = () => {
      sendHeightToParent();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="App">
      <div style={{ backgroundColor: '#f2f2f3', paddingTop: '20px' }}>
        <div className='container bg-white' style={{ maxWidth: '1150px' }}>
          <Routes>
            <Route path="/" element={<ReactImageCustomGrid imageData={imageData} />} />
            <Route path="/image-gallery" element={<ReactImageGallery imageData={imageData} />} />
            <Route path="/image-grid" element={<ReactImageGrid imageData={imageData} />} />
            <Route path="/image-custom-grid" element={<ReactImageCustomGrid imageData={imageData} />} />
            <Route path="/image-custom-grid-no-border" element={<ReactImageCustomGridNoBorder imageData={imageData} />} />
            {/* Continue passing imageData as props to other routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
