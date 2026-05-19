import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Productgrid from "@/components/Productgrid";

import Application from "@/components/Application";
import CertificateSection from "@/components/CertificateSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Productgrid/>
      {/* <ProductSection /> */}
      <Application />
      <CertificateSection />
      <Footer/>
    </>
  );
}
