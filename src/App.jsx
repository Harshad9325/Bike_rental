
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Bikes from './components/Bikes';
import Contact from './components/Contact';
import MainCarosal from './components/MainCarosal';

export default function App() {
  // Scroll to top on page refresh
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-800">
      <Navbar />
      <main className="pt-20">
        <MainCarosal />
        <Hero />
        <Bikes />
        <About />
        <Contact />
      </main>
      <footer className="bg-black bg-opacity-15 text-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3">Bike Rental</h4>
            <p className="text-sm text-slate-600 text-accent">
              Premium bikes for city rides, weekend trips, and adventures. Ride safe, ride stylish.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Contact</h4>
            <ul className="text-sm text-slate-600 text-accent space-y-1">
              <li>📍 123 Main Street, Pune, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ contact@bikerental.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Follow & Links</h4>
            <ul className="text-sm text-slate-600 text-accent space-y-1">
              <li>
                <a href="#bikes" className="hover:text-blue-600 transition">Bikes & Pricing</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition">Booking / Contact</a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" className="hover:text-pink-500 transition">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" className="hover:text-blue-700 transition">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-6 pt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bike Rental — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
