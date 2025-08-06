import React, { useEffect, useState } from "react";
import SlideCard from "./SlideCard";
import testimo from "../components/testimonials.json";

function Slide() {
  const [current, setCurrent] = useState(0);

  const { testmonials } = testimo;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testmonials.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [testmonials.length]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-x-5 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
      >
        {testmonials.concat(testmonials.slice(0, 2)).map((testim, index) => (
          <SlideCard
            key={index}
            pic={testim.pic}
            name={testim.name}
            opinion={testim.opinion}
          />
        ))}
      </div>
    </div>
  );
}

export default Slide;
