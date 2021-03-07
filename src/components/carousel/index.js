import React, { useState, useEffect } from "react";
import './index.css'

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Carousel({ path, prefixName, length = 0, carouselId , name }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    for (var i = 1; i < length; i++) {
      import(`../../assets/images/${path}/${prefixName}${i}.jpg`).then(
        (newImage) => {
          setImages((oldImages) => [...oldImages, newImage]);
        }
      );
    }
  }, []);
  const shuffledImages = shuffle(images);
  return (
    <div
      id={`carousel-${carouselId}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {shuffledImages.map((image, i) => {
          return (
            <button
              type="button"
              data-bs-target={`#carousel-${carouselId}`}
              data-bs-slide-to={i}
              className={i == 0 ? "active" : ""}
              aria-current={i == 0 ? "true" : "false"}
              aria-label={`Slide ${i}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {shuffledImages.map((image, i) => {
          return (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={image.default} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block carousel-caption-c">
                <h5 className="text-dark text-uppercase font-weight-bold text-c-bolder">{name || path}</h5>
                {/* <p>
                  Some representative placeholder content for the first slide.
                </p> */}
              </div>
            </div>
          );
        })}
        {/* <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
         */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
