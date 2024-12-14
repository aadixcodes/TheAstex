import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyAstex from "@/components/WhyAstex";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/ContactUs";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <WhyAstex />
    <Team />
    <Portfolio />
    <Testimonials />
    <Contact />
    </>
  );
}
