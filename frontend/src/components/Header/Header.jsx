




import React, { useState, useEffect } from "react";



const Header = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);



  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  const handleProduct=()=>{
    window.location.href = '#exploreMenu';
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden ">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Moves the slider
        }}
      >
        {images.map((slide, index) => (
          <div key={index} className="w-full h-[500px] flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full  object-cover"
            />
            {/* Text and Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
  <h2 className="text-green-700 text-5xl font-bold mb-2">
    {slide.title}
  </h2>
  <p className="text-red-500 text-lg mb-4">
    {slide.description}
  </p>
</div>

          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center mx-20 mb-24 justify-center">
        {/* {images.map((_, index) => (
          <button
            key={index}
            onClick={handleProduct} // Manually switch slides
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))} */}

        <button onClick={handleProduct} className="bg-[#d86c59] p-4 rounded-lg items-center hover:bg-[#a95a4c]">Explore more</button>
      </div>
    </div>
  );
};

export default Header;
