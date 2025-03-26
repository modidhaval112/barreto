"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Carousel from "./Carousel";

const sections = [
  {
    id: "01",
    title: "Materials, reborn",
    image: "/images/materials.jpg",
  },
  {
    id: "02",
    title: "Pioneering deep tech for tomorrow",
    image: "/images/deeptech.jpg",
  },
  {
    id: "03",
    title: "Waste reimagined with advanced business solutions",
    image: "/images/waste.jpg",
  },
  {
    id: "04",
    title: "Empowering change through circular economy",
    image: "/images/circular.jpg",
  },
  {
    id: "05",
    title: "We are built on sustainability",
    image: "/images/sustainability.jpg",
  },
];

const certifications = [
  {
    name: "ISO 14064",
    logo: "/path-to-iso-14064-logo.png",
  },
  {
    name: "GRE Emissions",
    logo: "/path-to-gre-emissions-logo.png",
  },
  {
    name: "UK Cycle Resources",
    logo: "/path-to-uk-cycle-logo.png",
  },
  {
    name: "NGA",
    logo: "/path-to-nga-logo.png",
  },
  {
    name: "RTS/RDS",
    logo: "/path-to-rts-logo.png",
  },
  {
    name: "NASA",
    logo: "/path-to-nasa-logo.png",
  },
  // Add more certifications as needed
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <motion.div
          key={sections[activeIndex].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sections[activeIndex].image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center">
          <motion.h1
            key={sections[activeIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {sections[activeIndex].title}
          </motion.h1>
          <p className="mt-2 text-gray-300">Scroll to explore more</p>
        </div>

        {/* Navigation Indicators */}
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeIndex === index ? "bg-white scale-125" : "bg-gray-500"
              )}
            />
          ))}
        </div>
      </section>

      <section className="main-content p-8 grid grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">
            Building a Circular Economy with Deep-Tech Innovations
          </h2>
          <p className="mb-4">
            At Attero, we aspire to solve tomorrow’s problem today. Transform
            your business into a more sustainable practice with our
            comprehensive infrastructure, green supply chain, and technological
            support to achieve ESG excellence.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="border-b pb-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">Extraction</h3>
            <p>
              Our patented technologies enable the extraction of 22 green metals
              with 99.9% purity. We achieve greater than 98% efficiency in
              extracting e-waste and Lithium-ion batteries.
            </p>
          </div>
          <div className="border-b pb-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">
              Research and Development
            </h3>
            <p>
              Our R&D team is dedicated to the continuous improvement and
              development of various technologies, supported by our in-house
              output testing capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Patents</h3>
            <p>
              We hold over 45 globally recognized patents in Lithium-ion battery
              recycling, e-waste segregation processes, and safe component
              removal.
            </p>
          </div>
        </div>
      </section>

      <Carousel />
      <section className="p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Total E-Waste Recycled */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md text-center h-full">
              <h3 className="text-xl font-semibold mb-2">
                Total E-Waste Recycled
              </h3>
              <p className="text-4xl font-bold mb-2">500,121 MT</p>
              <p className="text-gray-600 mt-auto">
                With recovery rate of over 98% and purity of 99.9%
              </p>
            </div>

            {/* Total Lithium-Ion Batteries Recycled */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md text-center h-full">
              <h3 className="text-xl font-semibold mb-2">
                Total Lithium-Ion Batteries Recycled
              </h3>
              <p className="text-4xl font-bold mb-2">9,998 MT</p>
              <p className="text-gray-600 mt-auto">
                With recovery rate of over 98% and purity of 99.9%
              </p>
            </div>

            {/* Greenhouse Gas Emissions */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md text-center h-full">
              <h3 className="text-xl font-semibold mb-2">
                Greenhouse Gas Emissions
              </h3>
              <p className="text-4xl font-bold mb-2">6,620 tCO2e</p>
              <p className="text-gray-600 mt-auto">
                For FY 2022-2023 & FY 2023-2024
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[500px] flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-black/50 z-0">
          {/* Replace with your actual image/GIF path */}
          <img
            src="/path-to-your-background.gif"
            alt="Sustainable future background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              At Attero, our goal goes beyond business its about pioneering a
              sustainable future
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                We champion the circular economy, ensuring resources are reused
                responsibly. Our commitment to EPR compliance sets industry
                standards, driving environmental stewardship.
              </p>

              <p>
                We aim to inspire others to join us in innovating, recycling,
                and leading the charge towards a greener tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications and Patents
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Carousel Track */}
            <div className="carousel-track flex gap-8 py-4 w-max hover:pause-animation">
              {/* Logo Items - Duplicated for infinite scroll effect */}
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="carousel-item flex flex-col items-center justify-center w-40 h-40 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/100"
                >
                  <div className="grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-16 w-auto object-contain mx-auto"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-center">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications and Patents
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Carousel Track */}
            <div className="carousel-track flex gap-8 py-4 w-max hover:pause-animation">
              {/* Logo Items - Duplicated for infinite scroll effect */}
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="carousel-item flex flex-col items-center justify-center w-40 h-40 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/100"
                >
                  <div className="grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-16 w-auto object-contain mx-auto"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-center">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .carousel-track {
          animation: scroll 30s linear infinite;
        }

        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default Home;
