import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import "../index.css";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { Image } from "../services/api"; 
const App: React.FC = () => {
  const [photos, setPhotos] = useState<Image[]>([]); // масив фото
  const [query, setQuery] = useState<string>(""); // обробка запита в інпуті
  const [isLoading, setIsLoading] = useState<boolean>(false); //індикатор загрузки
  const [isError, setIsError] = useState<boolean>(false); // індикатор помилки
  const [page, setPage] = useState<number>(1); // номер сторінки для підгрузки фото
  const [isOpen, setIsOpen] = useState<boolean>(false); //відкриття закриття
  const [selectedImage, setSelectedImage] = useState<Image | null>(null); //вибране фото

  const handleOpenModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

 
  const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery); 
    setPhotos([]); 
    setPage(1);
  };

  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetchImages({ query, perPage: 9, page });
        setPhotos((prev) => [...prev, ...response.results]); 
      } catch (error) {
        console.error("Error fetching images:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) getData();
  }, [query, page]); 
  return (
    <div>
      <SearchBar setQuery={handleSearchSubmit} />
      {isOpen && selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          imageUrl={selectedImage.urls.regular}
          altText={selectedImage.alt_description}
        />
      )}
      <ImageGallery items={photos} onImageClick={handleOpenModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
    </div>
  );
};

export default App;