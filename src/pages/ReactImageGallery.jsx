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
    thumbnailAlt: imgData.exif.ImageDescription || imgData.description, // Add thumbnail alt text
  }));

  const renderItem = (item) => (
    <div className="image-gallery-thumbnail">
      <img
        src={item.thumbnail}
        alt={item.thumbnailAlt || item.originalAlt || 'Thumbnail'}
        loading="lazy"
      />
    </div>
  );

  return (
    <>
      <ExhibitDescription />
      <ImageGallery
        items={items}
        showFullscreenButton={false}
        thumbnailPosition='bottom'
        showPlayButton={false}
        renderItem={renderItem} // Use the custom render function
      />
    </>
  );
};

export default ReactImageGallery;
