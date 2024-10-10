import React from "react";

interface ImageCardProps {
  url: string;
  alt: string;
  onClick: () => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ url, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;