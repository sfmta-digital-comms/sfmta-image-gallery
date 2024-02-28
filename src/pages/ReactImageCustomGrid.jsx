import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";
import ExhibitDescription from '../components/ExhibitDescription';

const ReactImageCustomGridNoBorder = ({ imageData }) => {
  const [index, setIndex] = useState(-1);

  const imagesForGallery = imageData.map((imageData, index) => ({
    src: imageData.imgixOriginal,
    thumbnail: imageData.imgixThumbnail,
    caption: imageData.exif.Caption,
    description: imageData.exif.Caption
  }));

  // Prepare slides for the lightbox
  const slides = imagesForGallery.map(({ src, description }) => ({
    src,
    description,
  }));

  const handleClick = (index) => setIndex(index);

  return (
    <>
      <ExhibitDescription
        mobile={true}
      />
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
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Zoom, Fullscreen, Slideshow, Captions]}
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
          captions={{ showToggle: true }}
        />
      </div>
    </>
  );
};


export default ReactImageCustomGridNoBorder;