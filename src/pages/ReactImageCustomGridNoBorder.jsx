import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/styles.css';
// import { imagesFull as imageFullPaths } from '../components/images-original';
// import { imagesFull as imageFullPaths } from '../components/images-full';
// import { imagesThumbnails as imageThumbnailPaths } from '../components/images-thumbnails';

// Convert your images for the gallery

const ReactImageCustomGridNoBorder = ({ imageData }) => {
  const [index, setIndex] = useState(-1);

  const imagesForGallery = imageData.map((imageData, index) => ({
    src: imageData.original,
    thumbnail: imageData.thumbnail,
    caption: imageData.title || 'Image caption here', // Optional: Use title or another attribute for the caption
  }));

  // Convert images for the lightbox
  const slides = imagesForGallery.map(({ src }) => ({
    src,
  }));


  const handleClick = (index) => setIndex(index);

  return (
    <div className="grid no-border" >
      {imagesForGallery.map((image, idx) => (
        <div className="img-wrapper" key={idx} onClick={() => handleClick(idx)}>
          <img
            src={image.thumbnail}
            alt={image.caption}
            style={{ cursor: 'pointer' }} // Inline styles are optional since you've defined styles in CSS
          />
        </div>
      ))}
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 1,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true
        }}
      />
    </div>
  );
};


export default ReactImageCustomGridNoBorder;