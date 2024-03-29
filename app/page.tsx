import Image from "next/image";
import Menus from "../components/shared/Menus";
import Hero from "../components/homecomponents/Hero";
import Hero2 from "../components/homecomponents/Hero2";
import Points from "../components/homecomponents/Points";
import Hero3 from "../components/homecomponents/Hero3";
import Hero4 from "../components/homecomponents/Hero4";
import Roadmap from "../components/homecomponents/Roadmap";
import CTA0 from "../components/homecomponents/CTA0";
import CTA from "../components/homecomponents/CTA";
import CTA2 from "../components/homecomponents/CTA2";
import FAQ from "../components/homecomponents/FAQ";
import Contact from "../components/homecomponents/Contact";
import Subscribe from "../components/homecomponents/Subscribe";
import ContactUs from "../components/homecomponents/ContactUs";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Menus />
      <Hero />
      <Hero2 />
      <Points />
      <Hero3 />
      <Hero4 />
      <CTA0 />
      <Roadmap />
      <CTA />
      <CTA2 />
      <FAQ />
      <Contact />
      <Subscribe />
      <ContactUs />
    </main>
  );
}
