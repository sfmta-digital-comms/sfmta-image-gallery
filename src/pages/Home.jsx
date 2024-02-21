import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <nav>
        <ul>
          <li><Link to="/image-gallery">Image Carousel</Link></li>
          <li><Link to="/image-grid">Image Grid</Link></li>
          {/* You can add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
