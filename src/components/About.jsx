import React from 'react';
import { motion } from 'framer-motion';
import { FaMotorcycle, FaShieldAlt, FaMapMarkedAlt } from 'react-icons/fa';

const sectionVariants = { hidden: {opacity:0, y:20}, visible: {opacity:1, y:0, transition:{duration:0.6}} }

export default function About() {
  const features = [
    {
      icon: <FaMotorcycle className="text-blue-600 w-6 h-6" />,
      title: 'Premium Bikes',
      desc: 'Wide range of scooters, commuters, and sports bikes for every rider.'
    },
    {
      icon: <FaShieldAlt className="text-blue-600 w-6 h-6" />,
      title: 'Safety First',
      desc: 'All bikes are regularly inspected and fully insured for your peace of mind.'
    },
    {
      icon: <FaMapMarkedAlt className="text-blue-600 w-6 h-6" />,
      title: 'Flexible Locations',
      desc: 'Pick up or drop off at multiple locations across the city.'
    }
  ];

  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.15 }} variants={sectionVariants}  id='about' className='pop max-w-6xl mx-auto px-6 py-16 bg-blue-50 rounded-2xl'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='pop text-center mb-12'
      >
        <h2 className='pop text-4xl font-extrabold text-slate-800'>About Bike Rental</h2>
        <p className='pop mt-4 text-slate-600 max-w-2xl mx-auto'>
          Experience hassle-free rides with our well-maintained bikes. We combine quality, safety, and convenience for every rider.
        </p>
      </motion.div>

      <div className='pop grid grid-cols-1 md:grid-cols-3 gap-8'>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className='pop bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform cursor-pointer'
          >
            <div className='pop mb-4'>{f.icon}</div>
            <h3 className='pop font-semibold text-lg mb-2'>{f.title}</h3>
            <p className='pop text-slate-600 text-sm'>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
