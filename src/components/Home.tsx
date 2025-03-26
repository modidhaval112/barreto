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
    </>
  );
};

export default Home;
