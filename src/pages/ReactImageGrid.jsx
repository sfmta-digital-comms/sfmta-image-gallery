import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';



const ReactImageGrid = ({ imageData }) => {
  const imagesForGallery = imageData.map((imgData) => ({
    src: imgData.full,
    thumbnail: imgData.thumbnail,
    // Optional: specify thumbnail dimensions if known or needed
    // thumbnailWidth: 320,
    // thumbnailHeight: 174,
    // Use EXIF ImageDescription or a custom description as the caption
    caption: imgData.exif?.ImageDescription || imgData.description || 'Image caption here',
  }));

  // Convert images for the lightbox
  const slides = imagesForGallery.map(({ src }) => ({
    src,
  }));
  
  // Gallery container style
  const galleryStyle = {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr', // Two images per row
    gridColumnGap: '10px', // Adjust the space between images
  };

  // Custom image style (if needed, apply via CSS classes)
  // .react-grid-gallery img { object-fit: cover; height: 100%; }

  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <div id='gridGallery' style={galleryStyle}>
      <Gallery images={imagesForGallery} onClick={handleClick} enableImageSelection={false} />
      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </div>
  );
};

export default ReactImageGrid;

