import "./style.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchImages(url) {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const result = await response.json();
      if (result.length > 0) {
        setImages(result);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error?.message);
    }
  }

  function handleNextImage() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  function handlePrevImage() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
    () => fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <span>Loading...</span>;
  if (errorMessage !== null) return <span>{errorMessage.message}</span>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        role="button"
        onClick={handlePrevImage}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              height={imageItem.height}
              width={imageItem.width}
              className={
                currentIndex === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        role="button"
        onClick={handleNextImage}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentIndex === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
