"use client";
import Image from "next/image";

const CertificationsMarquee = () => {
  const certifications = [
    {
      id: 1,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification1_f24734a8ed.svg",
      alt: "Certification 1",
    },
    {
      id: 2,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification2_4a3f58f0c5.svg",
      alt: "Certification 2",
    },
    {
      id: 3,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification3_4937c86c1b.svg",
      alt: "Certification 3",
    },
    {
      id: 4,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification5_02f2a8176a.svg",
      alt: "Certification 5",
    },
    {
      id: 5,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification6_c283c99119.jpeg",
      alt: "Certification 6",
    },
    {
      id: 6,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification7_8cf294bcf6.jpeg",
      alt: "Certification 7",
    },
    {
      id: 7,
      src: "https://attero-strapi.orbitsglobal.com/uploads/certification8_d711ed696b.jpeg",
      alt: "Certification 8",
    },
  ];

  // Create unique keys for duplicated items
  const marqueeItems = [...certifications, ...certifications].map(
    (cert, index) => ({
      ...cert,
      uniqueKey: `${cert.id}-${index}`, // Add index to make keys unique
    })
  );

  return (
    <div className="w-full h-auto py-10">
      <h3 className="text-3xl md:text-4xl text-center font-bold text-black mb-8">
        Certifications and Patents
      </h3>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Marquee Track - First Instance */}
        <div className="flex gap-1 w-max animate-marquee whitespace-nowrap">
          {marqueeItems.map((cert) => (
            <div
              key={`first-${cert.uniqueKey}`} // Unique key for first instance
              className="border-r-[0.5px] xl:border-solid xl:border-[#B9C4C1] min-w-[190px] h-[190px] flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={85}
                height={85}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Marquee Track - Second Instance */}
        <div className="flex gap-1 w-max animate-marquee2 whitespace-nowrap absolute top-0">
          {marqueeItems.map((cert) => (
            <div
              key={`second-${cert.uniqueKey}`} // Unique key for second instance
              className="border-r-[0.5px] xl:border-solid xl:border-[#B9C4C1] min-w-[190px] h-[190px] flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={85}
                height={85}
                className="object-contain"
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
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee 20s linear infinite;
          animation-delay: 10s;
        }
      `}</style>
    </div>
  );
};

export default CertificationsMarquee;
