import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "/src/assets/gallery1.jpg",
    "/src/assets/gallery2.jpg",
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <motion.section
      id="gallery"
      className="relative py-24 px-6 bg-gradient-to-b from-[#fff5f3] via-[#fff9f7] to-[#fffdfc] overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Ornamen background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10"></div>

      {/* Header */}
      <motion.div
        className="relative text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-serif text-rosegold-dark mb-3">
          Galeri Kenangan Kami
        </h2>
        <p className="text-gray-600 italic font-serif text-[1.05rem]">
          “Potret kebahagiaan dalam setiap momen berharga.”
        </p>
      </motion.div>

      {/* Grid Foto */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden group shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-rosegold/30 bg-white/50 backdrop-blur-md cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`Momen ${index + 1}`}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-3xl transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000050] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
              <p className="text-white text-lg font-serif italic drop-shadow-md">
                Momen Indah {index + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative max-w-4xl w-[94%] sm:w-[90%] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt="Momen"
                className="w-full h-auto object-contain rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              />

              {/* Tombol Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 bg-white/70 hover:bg-white/90 text-rosegold-dark rounded-full p-2 shadow-md transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Tombol Navigasi */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 text-white/80 hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 text-white/80 hover:text-white transition-all duration-300"
              >
                <ChevronRight size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
