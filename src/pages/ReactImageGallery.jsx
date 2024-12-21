import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ExhibitDescription from '../components/ExhibitDescription';

const ReactImageGallery = ({ imageData }) => {
  const items = imageData.map(imgData => ({
    original: imgData.imgixFull,
    thumbnail: imgData.imgixThumbnail,
    originalTitle: imgData.exif.ImageDescription || imgData.description,
    originalAlt: imgData.exif.ImageDescription || imgData.description,
    loading: 'lazy',
    description: imgData.exif.Caption || imgData.description,
    originalHeight: 700,
  }));

  return (
    <>
      <ExhibitDescription />
      <ImageGallery
        items={items}
        showFullscreenButton={false}
        thumbnailPosition='bottom'
        showPlayButton={false}
      />
    </>
  )

};
export default ReactImageGallery;
