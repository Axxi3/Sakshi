import Image from "next/image";
import HeroSection from "./component/Home/Hero";
import AboutSection from "./component/Home/AboutUs";
import TreatmentsSection from "./component/Home/treatments/Containter";
import ProcessSection from "./component/Home/process";
import TestimonialSection from "./component/Home/Testmonails";
import GallerySection from "./component/Home/Gallery";
import FAQSection from "./component/Home/FAQ";

export default function Home() {
  return (
    <>
   <HeroSection/>
   <AboutSection/>
   <TreatmentsSection/>
   <ProcessSection/>
   <TestimonialSection/>
    <GallerySection/>
   
    </>
  );
}
