import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { parse } from 'exifr';
import { imagesFull as imageFullPaths } from '../components/images-full';
import { imagesThumbnails as imageThumbnailPaths } from '../components/images-thumbnails';

const ReactImageGallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadImagesWithExif = async () => {
      const galleryItems = await Promise.all(imageFullPaths.map(async (img, index) => {
        // Fetch the image as a blob
        const response = await fetch(img.src);
        const blob = await response.blob();

        // Parse EXIF data from the blob
        const exif = await parse(blob);

        console.log(exif?.Artist);

        // Use EXIF title and description if available, otherwise use default values
        const artist = exif?.Artist || '';
        const titleAlt = exif?.ImageDescription || '';

        // Construct description based on available EXIF data
        let descriptionParts = [];
        if (titleAlt) descriptionParts.push(titleAlt);
        if (artist) descriptionParts.push(`${artist}`);

        // Join parts with " - " if both exist, or just use the one that exists
        const description = descriptionParts.join(" - ") || '';

        // Match each full-size image with its corresponding thumbnail
        const thumbnailImg = imageThumbnailPaths[index].src;

        // if there is no description return null
        if (!description) {
          return {
            original: img.src,
            thumbnail: thumbnailImg, // Assuming thumbnails are the same as originals
            originalTitle: titleAlt,
            originalAlt: titleAlt,
            loading: 'lazy',
          }
        } else {
          return {
            original: img.src,
            thumbnail: thumbnailImg, // Assuming thumbnails are the same as originals
            originalTitle: titleAlt,
            originalAlt: titleAlt,
            loading: 'lazy',
            description: description, // This field is actually not directly supported by `react-image-gallery` for display purposes
          };
        }
      }));

      setItems(galleryItems);
    };

    loadImagesWithExif();
  }, []);

  return <ImageGallery items={items} />;
};

export default ReactImageGallery;
