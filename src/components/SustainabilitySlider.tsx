"use client";
import { useState, useEffect, useRef } from "react";

const SustainabilitySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: "Materials, reborn",
      description: "Pioneering deep tech for tomorrow",
      image:
        "https://attero-strapi.orbitsglobal.com/uploads/home_banner_ad9fea37f0.png",
    },
    {
      title: "Pioneering deep tech for tomorrow",
      description: "Innovating for a sustainable future",
      image:
        "https://attero-strapi.orbitsglobal.com/uploads/home_banner_ad9fea37f0.png",
    },
    {
      title: "Waste reimagined with advanced business solutions",
      description: "Transforming waste into resources",
      image:
        "https://attero-strapi.orbitsglobal.com/uploads/home_banner_ad9fea37f0.png",
    },
    {
      title: "Empowering change through circular economy",
      description: "Closing the loop on resource use",
      image:
        "https://attero-strapi.orbitsglobal.com/uploads/home_banner_ad9fea37f0.png",
    },
    {
      title: "We are built on sustainability",
      description: "Our foundation for the future",
      image:
        "https://attero-strapi.orbitsglobal.com/uploads/home_banner_ad9fea37f0.png",
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  // Scroll to active slide
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: activeIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setActiveIndex(index);
    // Restart auto-scroll after manual selection
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Track - Hide scrollbar */}
      <div
        ref={sliderRef}
        className="flex w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {slides.map((slide, index) => (
          <section
            key={index}
            className="relative h-[650px] sm:h-[750px] md:h-[92vh] flex-shrink-0 w-full snap-start bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 absolute left-[20px] bottom-5 md:bottom-[130px] md:left-[40px] lg:left-[98px] w-[70%] md:w-[60%]">
              <h3 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                {slide.title}
              </h3>
            </div>

            {/* Right side list */}
            <div className="relative z-10 absolute right-[20px] md:right-[40px] lg:right-[118px] bottom-[150px] md:bottom-[110px]">
              <ul className="border-r-[0.5px] border-solid border-[#8c935c] pr-4">
                {slides.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-right flex flex-col items-end cursor-pointer"
                    onClick={() => handleDotClick(idx)}
                  >
                    <p
                      className={`font-light text-[14px] md:text-[17px] leading-[22px] text-white mb-3 text-end ${
                        idx === activeIndex ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <p
                      className={`font-semibold text-[14px] md:text-[17px] leading-[22px] text-white mb-[20px] text-right w-[60%] ${
                        idx === activeIndex ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation Dots - Mobile */}
      <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS to hide scrollbar in WebKit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SustainabilitySlider;
