import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ReactImageGallery = ({ imageData }) => {
  // Map imageData to the format expected by react-image-gallery
  const items = imageData.map(imgData => ({

    // Local images
    // original: imgData.full,
    // thumbnail: imgData.thumbnail,

    // Imgix images
    original: imgData.imgixFull,
    thumbnail: imgData.imgixThumbnail,

    originalTitle: imgData.exif.ImageDescription || imgData.description,
    originalAlt: imgData.exif.ImageDescription || imgData.description,
    loading: 'lazy',
    description: imgData.exif.ImageDescription || imgData.description,
  }));

  return (
    <>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum accumsan consequat. Phasellus pellentesque sem varius, ultricies augue sed, commodo nunc. Proin ac orci non augue lacinia vehicula. Vestibulum ac porta mauris. Donec quis sollicitudin mi. Sed imperdiet quam augue, vel convallis nisi facilisis ut. Curabitur iaculis condimentum scelerisque.</p>
      <p>Vestibulum ullamcorper mi sed ultricies condimentum. Aenean sagittis nunc a fringilla condimentum. Etiam a rutrum nibh. Mauris porta massa quam, eu imperdiet nulla tincidunt eu. Aenean tempor vestibulum leo, ut ullamcorper purus pulvinar eget. Donec ultrices sapien fermentum vehicula commodo. Fusce sed erat nec nisi maximus luctus ac nec lacus. In hac habitasse platea dictumst. Sed ut tellus ut enim vulputate commodo. Maecenas pretium sed libero at euismod.</p>
      <p>Proin lorem ligula, laoreet quis metus sit amet, maximus faucibus ipsum. Aliquam nisl sem, finibus vitae iaculis at, iaculis eget metus. Nulla sagittis nisi nunc, nec luctus nulla tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet feugiat mi. Phasellus nec congue ex, et tristique nulla. Vivamus vulputate ex neque, a vestibulum lorem lacinia ut. Maecenas lacinia interdum libero, ut ullamcorper justo ultrices ac. Quisque euismod augue ante, quis laoreet urna volutpat sit amet. </p>
      <ImageGallery items={items} />;
    </>
  )

};
export default ReactImageGallery;
