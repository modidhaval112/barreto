"use client";
import Image from "next/image";

const PartnershipsMarquee = () => {
  // First configure your next.config.js to allow the image domains
  // Add this to next.config.js:
  /*
  module.exports = {
    images: {
      domains: ['attero-strapi.orbitsglobal.com'],
    },
  }
  */

  const partners = [
    {
      id: 1,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par1_8549e56cb2.svg",
      alt: "Partner 1",
    },
    {
      id: 2,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par2_a013dddb42.svg",
      alt: "Partner 2",
    },
    {
      id: 3,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par3_160c0f1b8e.svg",
      alt: "Partner 3",
    },
    {
      id: 4,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par4_0c71327c39.svg",
      alt: "Partner 4",
    },
    {
      id: 5,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par5_1b350ee1f7.svg",
      alt: "Partner 5",
    },
    {
      id: 6,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par6_6ca36dca65.svg",
      alt: "Partner 6",
    },
    {
      id: 7,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par7_0260a12c31.png",
      alt: "Partner 7",
    },
    {
      id: 8,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par8_50e69ec820.png",
      alt: "Partner 8",
    },
    {
      id: 9,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par9_820484a36d.png",
      alt: "Partner 9",
    },
    {
      id: 10,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par10_154a102f0f.png",
      alt: "Partner 10",
    },
    {
      id: 11,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par11_eed6a05ac3.png",
      alt: "Partner 11",
    },
    {
      id: 12,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par12_04c7ab8e25.png",
      alt: "Partner 12",
    },
    {
      id: 13,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par13_af30e82a56.png",
      alt: "Partner 13",
    },
    {
      id: 14,
      src: "https://attero-strapi.orbitsglobal.com/uploads/par14_dda8b3a716.png",
      alt: "Partner 14",
    },
    {
      id: 15,
      src: "https://attero-strapi.orbitsglobal.com/uploads/asset_1_2_x_1_2x_2_30e9fd9860.png",
      alt: "Partner 15",
    },
  ];

  // Duplicate partners for seamless looping
  const marqueeItems = [...partners, ...partners].map((partner, index) => ({
    ...partner,
    uniqueKey: `${partner.id}-${index}`,
  }));

  return (
    <div className="pb-0">
      <h2 className="font-semibold text-3xl md:text-4xl text-black xl:px-[100px] xl:pb-[20px] sm:pb-[20px] pb-[10px] text-center">
        Partnerships
      </h2>
      <p className="text-[#202020] text-lg md:text-xl text-center px-4 md:px-40 mx-auto font-light">
        More than 300 enterprises have partnered with us including top-tier
        automotive and technology industries.
      </p>

      {/* Marquee Container */}
      <div className="relative h-[210px] overflow-y-hidden mt-8">
        {/* First Marquee Track */}
        <div className="flex gap-1 w-max animate-marquee whitespace-nowrap">
          {marqueeItems.map((partner) => (
            <div
              key={`first-${partner.uniqueKey}`}
              className="min-w-[190px] h-[190px] flex items-center justify-center xl:justify-start px-12 grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={230}
                height={77}
                className="w-[160px] max-h-[100px] object-contain"
                unoptimized // Required for external domains
              />
            </div>
          ))}
        </div>

        {/* Second Marquee Track (for seamless looping) */}
        <div className="flex gap-1 w-max animate-marquee2 whitespace-nowrap absolute top-0">
          {marqueeItems.map((partner) => (
            <div
              key={`second-${partner.uniqueKey}`}
              className="min-w-[190px] h-[190px] flex items-center justify-center xl:justify-start px-12 grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={230}
                height={77}
                className="w-[160px] max-h-[100px] object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 37.6s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee 37.6s linear infinite;
          animation-delay: 18.8s;
        }
        .no_scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no_scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PartnershipsMarquee;
