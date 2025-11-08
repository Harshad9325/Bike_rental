import React from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#mainCarosal" },
  { name: "About", href: "#about" },
  { name: "Bikes", href: "#bikes" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="fixed top-0 left-0 right-0 bg-indigo-200 backdrop-blur-md border-b border-white/40 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ">
        <a
          href="#mainCarosal"
          className="font-extrabold text-xl text-blue-700 flex items-center gap-2"
        >
          {/* Circular bike logo first */}
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <img
              src="https://tirupati.callbike.co.in/wp-content/uploads/2023/11/CALL-BIKE-RENTALS-VIZAG-LOGO.png" // demo bike logo
              alt="Bike Logo"
              className="w-10 h-10 object-contain "
            />
          </div>
          BikeRental
        </a>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="hover:text-blue-600 transition"
            >
              {l.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-4 inline-block px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:scale-105 transition"
        >
          Rent Now
        </a>
      </div>
    </motion.nav>
  );
}
