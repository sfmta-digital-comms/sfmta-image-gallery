import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { imagesFull as imageFullPaths } from '../components/images-full';
import { imagesThumbnails as imageThumbnailPaths } from '../components/images-thumbnails';

// Convert your images for the gallery
const imagesForGallery = imageFullPaths.map((img, index) => ({
  src: img.src,
  thumbnail: imageThumbnailPaths[index].src,
  thumbnailWidth: 320,  // Adjust based on your actual image sizes
  thumbnailHeight: 174, // Adjust accordingly
  caption: img.title || 'Image caption here', // Optional: Use title or another attribute for the caption
}));

// Convert images for the lightbox
const slides = imagesForGallery.map(({ src }) => ({
  src,
}));

const ReactImageGrid = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <div>
      <Gallery images={imagesForGallery} onClick={handleClick} enableImageSelection={false} />
      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </div>
  );
};

export default ReactImageGrid;
