import React from 'react';
import { useEffect, useState } from 'react'
import { BrowserView, MobileView, isMobile, isTablet } from 'react-device-detect';

// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import ReactImageGallery from './pages/ReactImageGallery';
// import ReactImageGrid from './pages/ReactImageGrid';
import ReactImageCustomGrid from './pages/ReactImageCustomGrid';
import Navbar from './components/Navbar';
// import ReactImageCustomGridNoBorder from './pages/ReactImageCustomGridNoBorder';
import './App.css';
import imageData from './imageData.json'; // Import image data

function sendHeightToParent() {
  let height = document.body.scrollHeight;
  window.parent.postMessage({
    frameHeight: height,
    frameId: 'appIframeID' // Make sure to use the actual ID of your iframe
  }, '*');
}


function sendMessageToDeviceParent() {
  window.parent.postMessage({
    mobile: true
  }, '*');
}

function App() {
  const [showModal, setShowModal] = useState(true); // Manage modal visibility here

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

  useEffect(() => {
    if (isMobile || isTablet) {
      sendMessageToDeviceParent();
    }
  }, []);


  return (
    <div className="App">
      {(isMobile || isTablet) && <Navbar onOpenModal={() => setShowModal(true)} />} {/* Pass a function to open the modal */}
      <div style={{ backgroundColor: '#f2f2f3', paddingTop: '20px' }}>
        <div className='container bg-white' style={{ maxWidth: '1150px' }}>
          <BrowserView>
            <ReactImageGallery imageData={imageData} />
          </BrowserView>
          <MobileView>
            <ReactImageCustomGrid imageData={imageData} showModal={showModal} setShowModal={setShowModal} />
          </MobileView>
        </div>
      </div>
    </div>
  );
}

export default App;
