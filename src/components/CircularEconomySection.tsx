import Image from "next/image";

const CircularEconomySection = () => {
  return (
    <div className="h-auto w-full bg-[#646464] flex items-center flex-col max-lg:gap-10 xl:flex-row p-10 lg:py-[58px] lg:px-[82px]">
      {/* Left Content */}
      <div className="w-full lg:w-[50%]">
        <h2 className="uppercase text-3xl md:text-4xl font-bold text-[#F4F8E7] mb-[30px]">
          Building a circular economy with deep-tech innovations
        </h2>
        <p className="text-base md:text-lg text-white font-light">
          At Attero, we aspire to solve tomorrows problem today. Transform your
          business into a more sustainable practice with our comprehensive
          infrastructure, green supply chain, and technological support to
          achieve ESG excellence.
        </p>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[50%] lg:pl-10">
        {/* Extraction */}
        <div className="flex flex-col sm:flex-row items-center gap-[30px] sm:gap-[60px] mb-[32px] border-b border-solid border-white pb-[32px]">
          <div className="min-w-[80px]">
            <Image
              src="/Homepage/Extraction.png"
              alt="Extraction icon"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <div>
            <p className="text-xl md:text-2xl text-[#F4F8E7] font-semibold mb-[20px]">
              Extraction
            </p>
            <p className="text-base md:text-lg text-white font-light">
              Our patented technologies enable the extraction of 22 green metals
              with 99.9% purity. We achieve greater than 98% efficiency in
              extracting e-waste and Lithium-ion batteries.
            </p>
          </div>
        </div>

        {/* Research and Development */}
        <div className="flex flex-col sm:flex-row items-center gap-[30px] sm:gap-[60px] mb-[32px] border-b border-solid border-white pb-[32px]">
          <div className="min-w-[80px]">
            <Image
              src="/Homepage/Research.png"
              alt="Research icon"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <div>
            <p className="text-xl md:text-2xl text-[#F4F8E7] font-semibold mb-[20px]">
              Research and Development
            </p>
            <p className="text-base md:text-lg text-white font-light">
              Our R&D team is dedicated to the continuous improvement and
              development of various technologies, supported by our in-house
              output testing capabilities.
            </p>
          </div>
        </div>

        {/* Patents */}
        <div className="flex flex-col sm:flex-row items-center gap-[30px] sm:gap-[60px] mb-[32px]">
          <div className="min-w-[80px]">
            <Image
              src="/Homepage/Patents.png"
              alt="Patents icon"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <div>
            <p className="text-xl md:text-2xl text-[#F4F8E7] font-semibold mb-[20px]">
              Patents
            </p>
            <p className="text-base md:text-lg text-white font-light">
              We hold over 45 globally recognized patents in Lithium-ion battery
              recycling, e-waste segregation processes, and safe component
              removal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularEconomySection;
