import React, { useState, useEffect } from "react";









const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const images = ['/3dprinter.png', '/3dmodelcar.png', '/3dmodelimageprinter.png', '/3dmodelmaterial.png', '/3dmodelsricexs.png']
  // Optional: Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full  h-full relative overflow-hidden rounded-lg shadow-lg" id="carousel">

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2 sm:px-4 md:px-6 box-border"
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>



      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black rounded-full p-2 shadow"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-black rounded-full p-2 shadow"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#6A38C2]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
