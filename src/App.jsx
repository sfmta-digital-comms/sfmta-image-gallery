import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactImageGallery from './pages/ReactImageGallery';
// Import other pages

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReactImageGallery />} />
        {/* Define routes for other pages */}
      </Routes>
    </div>
  );
}

export default App;
