"use client";
import SustainabilitySlider from "./SustainabilitySlider";
import { motion } from "framer-motion";
import CircularEconomySection from "./CircularEconomySection";
import BusinessSolutionsCarousel from "./BusinessSolutionsCarousel";
import ImpactSection from "./ImpactSection";
import CertificationsMarquee from "./CertificationsMarquee";
import PartnershipsMarquee from "./PartnershipsMarquee";

const Home = () => {
  return (
    <>
      <SustainabilitySlider />
      <CircularEconomySection />
      <BusinessSolutionsCarousel />
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
      <CertificationsMarquee />
      <PartnershipsMarquee />
    </>
  );
};

export default Home;
