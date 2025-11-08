import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { motion } from "framer-motion";
import { MainCarosalData } from "../data/MainCarosalData";

// Animation variants for images
const imageVariants = {
  hidden: { opacity: 0, scale: 1.1, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    x: -50,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const MainCarosal = () => {
  const items = MainCarosalData.map((item) => (
    <motion.div
      key={item.id}
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={imageVariants}
    >
      <img
        className="w-full h-[100vh] sm:h-[80vh] md:h-[90vh] object-cover "
        role="presentation"
        src={item.image}
        alt={item.name}
        loading="lazy"
      />
    </motion.div>
  ));

  return (
    <div className="relative w-full h-[100vh] sm:h-[80vh] md:h-[90vh] px-12 sm:px-6 md:px-3" id='mainCarosal'>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableDotsControls
        animationDuration={1000}
        mouseTracking
      />
      {/* Gradient overlay for visual polish */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent " />
    </div>
  );
};

export default MainCarosal;
