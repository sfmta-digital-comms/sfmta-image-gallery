import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <nav>
        <Link to="/image-gallery">Direction 1: Image Carousel</Link>
        <Link to="/image-grid">Direction 2: Image Grid</Link>
        <Link to="/image-custom-grid">Direction 3: Custom Grid</Link>
        <Link to="/image-custom-grid-no-border">Direction 4: Custom Grid No Border</Link>
      </nav>
    </div>
  );
}

export default Home;
