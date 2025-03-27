import React from "react";

const ImpactSection = () => {
  const impactStats = [
    {
      title: "Total E-Waste Recycled",
      value: "500,121",
      unit: "MT",
      description: "With recovery rate of over 98% and purity of 99.9%",
    },
    {
      title: "Total Lithium-Ion Batteries Recycled",
      value: "9,998",
      unit: "MT",
      description: "With recovery rate of over 98% and purity of 99.9%",
    },
    {
      title: "Greenhouse Gas Emissions",
      value: "6,620",
      unit: "tCO2e",
      description: "For FY 2022-2023 & FY 2023-2024",
    },
  ];

  return (
    <div className="flex items-center flex-col py-[50px]">
      <h3 className="my-[40px] text-center text-3xl md:text-4xl text-black font-bold">
        Our Impact
      </h3>

      <div className="flex justify-center gap-[40px] w-full flex-wrap">
        {impactStats.map((stat, index) => (
          <div key={index} className="max-w-[350px]">
            {/* Title */}
            <p className="font-bold my-[10px] mb-0 text-lg text-center md:min-h-[62px] text-[#202020] leading-[28px] w-[350px] mx-auto lg:w-[70%] max-md:w-[40%]">
              {stat.title}
            </p>

            {/* Border */}
            <div className="border-t-[10px] border-solid border-black w-3/5 mx-auto mt-6"></div>

            {/* Value with unit */}
            <div className="text-center flex items-baseline gap-[10px] mx-auto justify-center">
              <span className="mt-[10px] font-bold text-5xl md:text-6xl">
                {stat.value}
              </span>
              <p className="font-bold text-[32px] text-[#202020] leading-[28px]">
                {stat.unit}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#202020] text-lg text-center font-light pb-[10px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
