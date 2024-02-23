import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';



const ReactImageGrid = ({ imageData }) => {
  const imagesForGallery = imageData.map((imgData) => ({
    // Local images
    // src: imgData.full,
    // thumbnail: imgData.thumbnail,

    // Imgix images
    src: imgData.imgixFull,
    thumbnail: imgData.imgixThumbnail,

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
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum accumsan consequat. Phasellus pellentesque sem varius, ultricies augue sed, commodo nunc. Proin ac orci non augue lacinia vehicula. Vestibulum ac porta mauris. Donec quis sollicitudin mi. Sed imperdiet quam augue, vel convallis nisi facilisis ut. Curabitur iaculis condimentum scelerisque.</p>
      <p>Vestibulum ullamcorper mi sed ultricies condimentum. Aenean sagittis nunc a fringilla condimentum. Etiam a rutrum nibh. Mauris porta massa quam, eu imperdiet nulla tincidunt eu. Aenean tempor vestibulum leo, ut ullamcorper purus pulvinar eget. Donec ultrices sapien fermentum vehicula commodo. Fusce sed erat nec nisi maximus luctus ac nec lacus. In hac habitasse platea dictumst. Sed ut tellus ut enim vulputate commodo. Maecenas pretium sed libero at euismod.</p>
      <p>Proin lorem ligula, laoreet quis metus sit amet, maximus faucibus ipsum. Aliquam nisl sem, finibus vitae iaculis at, iaculis eget metus. Nulla sagittis nisi nunc, nec luctus nulla tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet feugiat mi. Phasellus nec congue ex, et tristique nulla. Vivamus vulputate ex neque, a vestibulum lorem lacinia ut. Maecenas lacinia interdum libero, ut ullamcorper justo ultrices ac. Quisque euismod augue ante, quis laoreet urna volutpat sit amet. </p>
      <div id='gridGallery' style={galleryStyle}>
        <Gallery images={imagesForGallery} onClick={handleClick} enableImageSelection={false} />
        <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
      </div>
    </>
  );
};

export default ReactImageGrid;

