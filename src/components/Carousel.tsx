import { useState, useEffect } from "react";
import Image from "next/image"; // Importing Image from next/image

const carouselItems = [
  {
    id: "green-metals",
    icon: "/path-to-green-metals-icon.svg",
    title: "Green Metals",
    description: "High-purity metal recovery for a sustainable future.",
  },
  {
    id: "selsmart",
    icon: "/path-to-selsmart-icon.svg",
    title: "Selsmart",
    description: "Smart solutions for efficient resource management.",
  },
  {
    id: "software-technology",
    icon: "/path-to-software-technology-icon.svg",
    title: "Software Technology",
    description: "Innovative software solutions for e-waste management.",
  },
  {
    id: "e-waste-management",
    icon: "/path-to-e-waste-management-icon.svg",
    title: "E-waste Management",
    description: "Comprehensive solutions for e-waste recycling and disposal.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-semibold mb-8">Our Business Solutions</h2>
        <div className="flex justify-center items-center space-x-8">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? "scale-110 opacity-100"
                  : "scale-90 opacity-50"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={64} // Specify the width in pixels
                height={64} // Specify the height in pixels
                className="w-16 h-16 mb-2"
              />
              {index === currentIndex && (
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
