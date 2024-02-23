import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import 'yet-another-react-lightbox/styles.css';
// import { imagesFull as imageFullPaths } from '../components/images-original';
// import { imagesFull as imageFullPaths } from '../components/images-full';
// import { imagesThumbnails as imageThumbnailPaths } from '../components/images-thumbnails';

// Convert your images for the gallery

const ReactImageCustomGridNoBorder = ({ imageData }) => {
  const [index, setIndex] = useState(-1);

  const imagesForGallery = imageData.map((imageData, index) => ({
    // Local images
    // src: imageData.original,
    // thumbnail: imageData.thumbnail,

    // Imgix images
    src: imageData.imgixOriginal,
    thumbnail: imageData.imgixThumbnail,
    
    caption: imageData.title || 'Image caption here', // Optional: Use title or another attribute for the caption
  }));

  // Convert images for the lightbox
  const slides = imagesForGallery.map(({ src }) => ({
    src,
  }));


  const handleClick = (index) => setIndex(index);

  return (
    <>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum accumsan consequat. Phasellus pellentesque sem varius, ultricies augue sed, commodo nunc. Proin ac orci non augue lacinia vehicula. Vestibulum ac porta mauris. Donec quis sollicitudin mi. Sed imperdiet quam augue, vel convallis nisi facilisis ut. Curabitur iaculis condimentum scelerisque.</p>
      <p>Vestibulum ullamcorper mi sed ultricies condimentum. Aenean sagittis nunc a fringilla condimentum. Etiam a rutrum nibh. Mauris porta massa quam, eu imperdiet nulla tincidunt eu. Aenean tempor vestibulum leo, ut ullamcorper purus pulvinar eget. Donec ultrices sapien fermentum vehicula commodo. Fusce sed erat nec nisi maximus luctus ac nec lacus. In hac habitasse platea dictumst. Sed ut tellus ut enim vulputate commodo. Maecenas pretium sed libero at euismod.</p>
      <p>Proin lorem ligula, laoreet quis metus sit amet, maximus faucibus ipsum. Aliquam nisl sem, finibus vitae iaculis at, iaculis eget metus. Nulla sagittis nisi nunc, nec luctus nulla tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet feugiat mi. Phasellus nec congue ex, et tristique nulla. Vivamus vulputate ex neque, a vestibulum lorem lacinia ut. Maecenas lacinia interdum libero, ut ullamcorper justo ultrices ac. Quisque euismod augue ante, quis laoreet urna volutpat sit amet. </p>
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
        plugins={[Zoom, Fullscreen, Slideshow ]}
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
    </>
  );
};


export default ReactImageCustomGridNoBorder;