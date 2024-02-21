import React from 'react';
import { Gallery } from 'react-grid-gallery';
import { imagesFull as imageFullPaths } from '../components/images-full';
import { imagesThumbnails as imageThumbnailPaths } from '../components/images-thumbnails';

const imagesForGallery = imageFullPaths.map((img, index) => ({
  src: img.src,
  thumbnail: imageThumbnailPaths[index].src,
  thumbnailWidth: 320,  // Example width, adjust according to your actual image sizes
  thumbnailHeight: 174, // Example height, adjust accordingly
  caption: img.title || 'Image caption here', // Optional: Use title or another attribute for the caption
}));

const ReactImageGrid = () => {
    return <Gallery images={imagesForGallery} />;
};

export default ReactImageGrid;
