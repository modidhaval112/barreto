"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BusinessSolutionsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const solutions = [
    {
      title: "E-waste Management",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_ewaste_management_712b6e87d3.svg",
      description: "",
    },
    {
      title: "Lithium-ion Battery Management",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_lithium_battery_5aaca82556.svg",
      description: "",
    },
    {
      title: "Upcycling",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_upcyling_99c65f0bc1.svg",
      description: "",
    },
    {
      title: "Green Metals",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_green_metals_4e25025930.svg",
      description: "",
    },
    {
      title: "Selsmart",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_selsmart_f1d65696ab.svg",
      description:
        "Selsmart is pioneering a new way to sell used home appliances. Our direct-to-consumer platform bridges the gap in responsible e-waste management, offering eco-friendly solutions for a cleaner, greener future.",
    },
    {
      title: "MetalMandi",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_metalmandi_1ac3356376.svg",
      description: "",
    },
    {
      title: "Software Technology",
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_software_tech_908642f263.svg",
      description: "",
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [solutions.length]);

  // Center the active item
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const itemWidth = container.children[0]?.clientWidth || 317;
      const scrollPosition =
        activeIndex * itemWidth - container.clientWidth / 2 + itemWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex(index);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 3000);
  };

  return (
    <div className="pt-[50px] sm:pt-[100px] pb-[120px] max-md:h-[600px]">
      <h3 className="font-bold text-3xl md:text-4xl text-black text-center uppercase mb-[20px] mx-auto">
        Our Business Solutions
      </h3>
      <p className="text-base md:text-lg text-gray-700 text-center xl:w-[80%] mx-auto font-light pb-[40px] xl:pb-[70px]">
        At Attero, we handle the complete recycling process in-house, achieving
        high-purity metal recovery and promoting resource efficiency for a
        sustainable future.
      </p>

      <div className="relative mt-[50px]">
        {/* Decorative background icon */}
        <div className="flex items-center justify-center">
          <Image
            src="/BestServiceIcon/BestServiceIconBgNew.svg"
            alt=""
            width={301}
            height={363}
            className="absolute top-[-50px]"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[250px] sm:w-[300px] transition-all duration-300 ${
                  index === activeIndex ? "scale-100" : "scale-90 opacity-70"
                }`}
              >
                <div className="relative text-center p-6 rounded-lg bg-white shadow-sm">
                  <div className="h-10 w-10 mx-auto">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={40}
                      height={40}
                      className="mx-auto"
                    />
                  </div>
                  <p
                    className={`mt-5 font-medium ${
                      index === activeIndex
                        ? "text-black text-lg"
                        : "text-gray-500 text-base"
                    }`}
                  >
                    {solution.title}
                  </p>
                  {index === activeIndex && solution.description && (
                    <p className="mt-3 text-sm text-gray-600 font-light">
                      {solution.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-black w-6" : "bg-gray-300"
                }`}
                aria-label={`View ${solutions[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar for WebKit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BusinessSolutionsCarousel;
