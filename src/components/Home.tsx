"use client";
import Carousel from "./Carousel";
import SustainabilitySlider from "./SustainabilitySlider";
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
      <Carousel />
      <ImpactSection />
      <CertificationsMarquee />
      <PartnershipsMarquee />
    </>
  );
};

export default Home;
