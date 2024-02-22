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

  return <ImageGallery items={items} />;
};
export default ReactImageGallery;
