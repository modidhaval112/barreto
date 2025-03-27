"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const BusinessSolutions: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const services = [
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_ewaste_management_712b6e87d3.svg",
      title: "E-waste Management",
      description:
        "Comprehensive electronic waste management solutions for sustainable recycling and responsible disposal.",
    },
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_lithium_battery_5aaca82556.svg",
      title: "Lithium-ion Battery Management",
      description:
        "Advanced recycling and management of lithium-ion batteries, ensuring environmental safety and resource recovery.",
    },
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_upcyling_99c65f0bc1.svg",
      title: "Upcycling",
      description:
        "Transforming waste materials into new, high-value products, reducing environmental impact and creating innovative solutions.",
    },
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_green_metals_4e25025930.svg",
      title: "Green Metals",
      description:
        "Sustainable metal recovery and processing, minimizing environmental footprint and promoting circular economy principles.",
    },
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_selsmart_f1d65696ab.svg",
      title: "Selsmart",
      description:
        "Pioneering a direct-to-consumer platform for selling used home appliances, bridging the gap in responsible e-waste management.",
    },
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_metalmandi_1ac3356376.svg",
      title: "MetalMandi",
      description:
        "Digital marketplace for metal trading, providing transparent and efficient solutions for metal recycling and commerce.",
    },
    {
      icon: "https://attero-strapi.orbitsglobal.com/uploads/icon_software_tech_908642f263.svg",
      title: "Software Technology",
      description:
        "Innovative software solutions to optimize waste management, tracking, and recycling processes.",
    },
  ];

  const scrollToIndex = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-sliding effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoScroll);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="pt-[50px] sm:pt-[100px] pb-[120px] max-md:h-[700px] relative">
      <h3 className="font-bold text-2xl text-black text-center uppercase mb-[20px] mx-auto">
        Our Business Solutions
      </h3>
      <p className="text-center xl:w-[80%] mx-auto font-light pb-[40px] xl:pb-[70px] text-gray-700">
        At Attero, we handle the complete recycling process in-house, achieving
        high-purity metal recovery and promoting resource efficiency for a
        sustainable future.
      </p>

      <div className="relative mt-[50px]">
        <div className="flex items-center justify-center">
          <Image
            alt="Hover Image"
            src="/service/BestServiceIconBgNew.svg"
            width={301}
            height={363}
            className="absolute top-[-50px] z-0"
          />
        </div>

        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => {
                const isCenterSlide = index === selectedIndex;

                return (
                  <div
                    key={service.title}
                    className="flex-grow-0 flex-shrink-0 w-[381px] pl-4 pr-4"
                  >
                    <div
                      onClick={() => scrollToIndex(index)}
                      className={`text-center transition-all duration-300 cursor-pointer ${
                        isCenterSlide
                          ? "scale-100 opacity-100"
                          : "scale-75 opacity-50"
                      }`}
                    >
                      <Image
                        alt="Service Icon"
                        src={service.icon}
                        width={40}
                        height={40}
                        className="text-center mx-auto mt-[20px]"
                      />
                      <p className="text-gray-600 font-medium text-base text-center mt-[20px] w-[200px] mx-auto">
                        {service.title}
                      </p>

                      {/* Conditional Description Rendering */}
                      {isCenterSlide && (
                        <p className="mt-[20px] text-[14px] text-gray-700 w-[250px] mx-auto">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
