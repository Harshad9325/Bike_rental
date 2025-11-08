import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bikes } from '../data/bikesData';

const sectionVariants = { hidden: {opacity:0, y:20}, visible: {opacity:1, y:0, transition:{duration:0.6}} }

export default function Bikes() {
  const [selectedBike, setSelectedBike] = useState(null);

  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{ once:true, amount:0.15 }} variants={sectionVariants}  id='bikes' className='pop max-w-6xl mx-auto px-6 py-12'>
      <h2 className='pop text-3xl font-bold mb-6'>Bikes & Pricing</h2>

      <div className='pop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {bikes.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5, boxShadow: '0 12px 25px rgba(37, 99, 235, 0.2)' }}
            className='pop bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-blue-50 transition-all duration-300'
          >
            <img src={b.img} alt={b.name} className='pop w-full h-48 object-cover transition-transform duration-500' />
            <div className='pop p-5'>
              <h3 className='pop font-semibold text-lg'>{b.name}</h3>
              <p className='pop mt-2 text-slate-600'>{b.price}</p>
              <div className='pop mt-4 flex gap-3'>
                <button
                  onClick={() => setSelectedBike(b)}
                  className='pop px-4 py-2 rounded-lg border border-slate-200 text-sm hover:border-blue-400 hover:text-blue-600 transition'
                >
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBike && (
          <motion.div
            className='pop fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='pop bg-white rounded-2xl p-6 max-w-md mx-auto shadow-2xl relative'
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedBike(null)}
                className='pop absolute top-3 right-4 text-slate-500 hover:text-red-500 text-xl font-bold'
              >
                ×
              </button>
              <img src={selectedBike.img} alt={selectedBike.name} className='pop w-full h-48 object-cover rounded-lg' />
              <h3 className='pop text-xl font-bold mt-4'>{selectedBike.name}</h3>
              <p className='pop text-blue-600 font-semibold mt-1'>{selectedBike.price}</p>
              <p className='pop text-slate-600 mt-3'>{selectedBike.description}</p>

              {/* Additional Bike Details */}
              <div className='pop mt-4 space-y-1 text-sm text-slate-700'>
                <p><strong>Engine:</strong> {selectedBike.engine || 'N/A'}</p>
                <p><strong>Fuel Type:</strong> {selectedBike.fuel || 'Petrol'}</p>
                <p><strong>Mileage:</strong> {selectedBike.mileage || 'N/A'}</p>
                <p><strong>Transmission:</strong> {selectedBike.transmission || 'Manual'}</p>
              </div>

              <div className='pop mt-6 flex justify-end'>
                <a
                  href='#contact'
                  className='pop px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
