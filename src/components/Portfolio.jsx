import React, { useState } from "react";
import { recent } from "../assets/assets";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleImages = showMore ? recent : recent.slice(0, 6); // Show first 6 initially

  return (
    <div id="portfolio" className="py-10 px-5">
      <h1 className="font-bold text-xl py-9 italic text-center">Portfolio</h1>

      <div className="flex gap-6 flex-wrap justify-center px-30 max-md:px-1">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`portfolio-${index}`}
            className="w-[300px] h-[300px] object-cover rounded shadow-md"
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        {recent.length > 6 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition"
          >
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
