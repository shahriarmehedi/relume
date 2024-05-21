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
      <div>
        <img src="/5.png" alt="hero-bg" className="w-full h-[300px] object-cover bg-center" />
        <div className="flex justify-center items-center mt-7">
          <a href="https://drive.google.com/file/d/1pRqNYNUOxUmvHv-cqyiiMWsZQOH6z1zu/view?usp=drive_link" target="_blank" >
            <div className="cursor-pointer h-12 w-36 rounded-full bg-gradient-to-r from-sky-500 to-red-500 p-[1px] hover:scale-105 hover:from-red-500 hover:to-sky-500 transition duration-200 ">
              <div className="flex h-full w-full items-center justify-center bg-gray-800 rounded-full">
                <h1 className="text-white">
                  Whitepaper
                </h1>
              </div>
            </div>
          </a>
        </div>
      </div>
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
