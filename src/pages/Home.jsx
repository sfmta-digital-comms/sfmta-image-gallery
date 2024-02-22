import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <nav>
        <Link to="/image-gallery">Direction 1: Image Carousel</Link>
        <p>Better on a desktop. Mobile a bit clunky.</p><br />
        <Link to="/image-grid">Direction 2: Image Grid</Link>
        <p>It is an "ok" way to show images of different aspect ratios on desktop. Bad on mobile</p><br />
        <Link to="/image-custom-grid">Direction 3: Custom Grid</Link>
        <p>Thumbnails cropped to squares. Best on mobile</p><br />
        <Link to="/image-custom-grid-no-border">Direction 4: Custom Grid No Border</Link>
        <p>Thumbnails cropped to squares. No border between thumbnails. Best on mobile</p>
      </nav>
    </div>
  );
}

export default Home;
