"use client";
import Image from "next/image";

const CertificationsMarquee = () => {
  const certifications = [
    {
      id: 1,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification1_f24734a8ed.svg",
      alt: "Uttarakhand",
    },
    {
      id: 2,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification2_4a3f58f0c5.svg",
      alt: "ISO 14064 GHG Emissions",
    },
    {
      id: 3,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification3_4937c86c1b.svg",
      alt: "Global Recycled Standard",
    },
    {
      id: 4,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification5_02f2a8176a.svg",
      alt: "ISO Life Cycle Assessment",
    },
    {
      id: 5,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification6_c283c99119.jpeg",
      alt: "IBMG Book Records",
    },
    {
      id: 6,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification7_8cf294bcf6.jpeg",
      alt: "Unknown Certification",
    },
    {
      id: 7,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification8_d711ed696b.jpeg",
      alt: "NASA",
    },
  ];

  return (
    <div className="w-full py-10">
      <h3 className="text-3xl md:text-4xl text-center font-bold text-black mb-8">
        Certifications and Patents
      </h3>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee items-center justify-center">
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="border-r-[0.5px] xl:border-solid xl:border-[#B9C4C1] min-w-[190px] h-[190px] flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={85}
                height={85}
                loading="lazy"
                decoding="async"
                className="object-contain"
              />
            </div>
          ))}
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
          animation: marquee 15s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default CertificationsMarquee;
