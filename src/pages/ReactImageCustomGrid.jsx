import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/styles.css';
import { imagesFull as imageFullPaths } from '../components/images-full';
import { imagesThumbnails as imageThumbnailPaths } from '../components/images-thumbnails';

// Convert your images for the gallery
const imagesForGallery = imageFullPaths.map((img, index) => ({
  src: img.src,
  thumbnail: imageThumbnailPaths[index].src,
  caption: img.title || 'Image caption here', // Optional: Use title or another attribute for the caption
}));

// Convert images for the lightbox
const slides = imagesForGallery.map(({ src }) => ({
  src,
}));

const ReactImageCustomGrid = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <div className="grid">
      {imagesForGallery.map((image, idx) => (
        <div className="img-wrapper" key={idx} onClick={() => handleClick(idx)}>
          <img
            src={image.thumbnail}
            alt={image.caption}
            style={{ cursor: 'pointer' }} // Inline styles are optional since you've defined styles in CSS
          />
        </div>
      ))}
      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} plugins={[Zoom]} />
    </div>
  );
};


export default ReactImageCustomGrid;