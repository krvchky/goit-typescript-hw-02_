import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";


interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (item: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <div className={s.galleryWrapper}>
      <ul className={s.ulImage}>
        {items.map((item) => (
          <li key={item.id} className={s.imageItem}>
            <ImageCard
              url={item.urls.small}
              alt={item.alt_description}
              onClick={() => onImageClick(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;