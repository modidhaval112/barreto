"use client";
import Image from "next/image";

const PartnershipsMarquee = () => {
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
    <div className="w-full py-10">
      <div className="text-3xl md:text-4xl text-center font-bold text-black mb-8">
        <h2 className="font-semibold text-3xl md:text-4xl text-black text-center mb-4">
          Partnerships
        </h2>
        <p className="text-[#202020] text-lg md:text-xl text-center max-w-4xl mx-auto mb-8 font-light">
          More than 300 enterprises have partnered with us including top-tier
          automotive and technology industries.
        </p>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {marqueeItems.map((partner, index) => (
              <div
                key={`partner-${partner.id}-${index}`}
                className="flex-shrink-0 w-[190px] h-[190px] flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={160}
                  height={100}
                  className="max-w-[160px] max-h-[100px] object-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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
          display: flex;
          animation: marquee 6s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnershipsMarquee;
