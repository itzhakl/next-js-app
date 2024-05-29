import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { SelectedPage } from "@/shared/types";
import Primary from "@/pages/Home";
import Benefits from "@/pages/Benefits";
import Ourclasses from "@/pages/Ourclasses";
import ContactUs from "@/pages/ContactUs";
import Footer from "@/pages/Footer";
import AboutUs from "@/pages/AboutUs";
import {
  motion,
  useScroll,
  useSpring
} from "framer-motion";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div dir="rtl" className="bg-secondary text-primary-text max-w-svw">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Primary selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Ourclasses setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
      {/* {components.map((Component) => (
        <Component selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      ))} */}
      <motion.div
        className="bg-secondary-text fixed bottom-2 left-0 right-0 h-[0.3125rem] w-full rounded-full"
        style={{ scaleX }}
      />
    </div>
  );
}
