import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { motorcycles } from "../data/heroBikeData";

const sectionVariants = { hidden: {opacity:0, y:20}, visible: {opacity:1, y:0, transition:{duration:0.6}} }

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === motorcycles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.15 }} variants={sectionVariants} 
      id="home"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Text Section */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Premium rides made simple.
          <span className="block text-blue-600">
            Find your perfect bike — anytime, anywhere.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-slate-600 max-w-xl"
        >
          Fast bookings, well-maintained bikes, transparent pricing. Choose from
          scooters to sports bikes.
        </motion.p>

        {/* Buttons side by side */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <motion.a
            href="#bikes"
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg transition text-center"
          >
            Rent Now
          </motion.a>
          <motion.a
            href="#about"
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 transition text-center"
          >
            Learn More
          </motion.a>
        </div>
      </div>

      {/* Right Carousel Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex-1"
        whileHover={{
          scale: 1.05,
          rotate: 2,
          boxShadow: "0 10px 20px rgba(37,99,235,0.2)",
        }}
      >
        <div className="card-shadow rounded-2xl overflow-hidden relative w-full h-64 sm:h-80 md:h-96">
          {motorcycles.map((bike, index) => (
            <img
              key={bike.id}
              src={bike.img}
              alt={bike.name}
              className={`w-full h-full object-cover transition-opacity duration-1000 absolute top-0 left-0 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
