"use client";
import Carousel from "./Carousel";
import SustainabilitySlider from "./SustainabilitySlider";
import CircularEconomySection from "./CircularEconomySection";
import BusinessSolutionsCarousel from "./BusinessSolutionsCarousel";
import ImpactSection from "./ImpactSection";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "ISO 14064",
    logo: "/certifications/iso.webp",
  },
  {
    name: "GRE Emissions",
    logo: "/certifications/recycle.webp",
  },
  {
    name: "UK Cycle Resources",
    logo: "/certifications/limca.svg",
  },
  {
    name: "NGA",
    logo: "/certifications/thali.svg",
  },
  {
    name: "RTS/RDS",
    logo: "/certifications/uttarakhand.svg",
  },
  {
    name: "NASA",
    logo: "/certifications/nasa.webp",
  },
  // Add more certifications as needed
];

const Home = () => {
  return (
    <>
      <SustainabilitySlider />
      <CircularEconomySection />
      <BusinessSolutionsCarousel />

      <Carousel />
      <ImpactSection />

      <section>
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          >
            <source src="/video/WebsiteGlobe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <motion.div
              className="text-white text-center max-w-4xl px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                At Attero, our goal goes beyond business its about pioneering a
                sustainable future
              </motion.h1>

              <motion.div
                className="space-y-6 text-lg md:text-xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              >
                <p>
                  We champion the circular economy, ensuring resources are
                  reused responsibly. Our commitment to EPR compliance sets
                  industry standards, driving environmental stewardship.
                </p>
                <p>
                  We aim to inspire others to join us in innovating, recycling,
                  and leading the charge towards a greener tomorrow.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-15" />
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
