import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const sectionVariants = { hidden: {opacity:0, y:20}, visible: {opacity:1, y:0, transition:{duration:0.6}} }

export default function Contact() {
  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.15 }} variants={sectionVariants}  id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Contact Dealer
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Bike Rental Dealer Info
          </h3>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>contact@bikerental.in</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>123 Blue Street, Magarpatta, Pune, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-blue-600" />
              <span>Open Daily: 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </motion.div>

        {/* Map / Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg border border-blue-50"
        >
          <iframe
            title="Dealer Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9966250912025!2d73.95044687453569!3d18.483812070297315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e42e461051%3A0xae5557c2264c1fd5!2sBhekrai%20Nagar%20PMP%20Depot!5e0!3m2!1sen!2sin!4v1760182157895!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[350px] md:h-full rounded-2xl border-0"
          ></iframe>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-slate-500 mt-10"
      >
        Visit our showroom or call to reserve your bike today!
      </motion.p>
    </motion.section>
  );
}
