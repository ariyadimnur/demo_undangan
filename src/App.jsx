import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import OpeningScreen from "./components/OpeningScreen";
import HeroSection from "./components/HeroSection";
import DetailsSection from "./components/DetailsSection";
import RSVPSection from "./components/RSVPSection";
import GallerySection from "./components/GallerySection";
import WishesSection from "./components/WishesSection";
import MusicPlayer from "./components/MusicPlayer";
import GoldenFlowers from "./components/GoldenFlowers"; // 🌸 import baru
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="text-center relative overflow-hidden">
      {/* 🌸 Background animasi */}
      <GoldenFlowers />

      <AnimatePresence>
        {!opened && <OpeningScreen onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
  <>
    {/* 🌸 Navbar elegan */}
    <Navbar />

    {/* 🎵 Musik & Section */}
    <MusicPlayer play={opened} />
    <HeroSection />
    <DetailsSection />
    <RSVPSection />
    <GallerySection />
    <WishesSection />
    <Footer />
  </>
)}

    </div>
  );
}
