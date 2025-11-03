import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import flowerGold from "../assets/flower-gold.png";

export default function DetailsSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <motion.section
      id="details"
      className="relative py-24 px-6 bg-gradient-to-b from-[#fffaf5] via-[#fdfaf7] to-[#f7f4ef] overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ✨ Animasi shimmer + pantulan cahaya */}
      <style>
        {`
          @keyframes shimmer {
            0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); filter: brightness(1); }
            50% { opacity: 0.6; transform: scale(1.05) rotate(2deg); filter: brightness(1.4); }
          }
          @keyframes lightSweep {
            0% { transform: translateX(-150%) rotate(25deg); opacity: 0; }
            40% { opacity: 0.4; }
            60% { opacity: 0.6; transform: translateX(150%) rotate(25deg); }
            100% { opacity: 0; transform: translateX(150%) rotate(25deg); }
          }
          .animate-shimmer { animation: shimmer 6s ease-in-out infinite; }
          .light-sweep {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);
            animation: lightSweep 8s ease-in-out infinite;
            pointer-events: none;
            mix-blend-mode: screen;
          }
        `}
      </style>

      {/* 🌸 Ornamen Bunga Emas Kiri Atas */}
      <motion.div
        className="absolute top-2 left-2 w-28 sm:w-36 opacity-40 rotate-12 animate-shimmer"
        initial={{ opacity: 0, y: -20, x: -20 }}
        whileInView={{ opacity: 0.4, y: 0, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={flowerGold} alt="Flower Ornament Top" className="w-full h-auto relative" />
        <div className="light-sweep"></div>
      </motion.div>

      {/* 🌸 Ornamen Bunga Emas Kanan Bawah */}
      <motion.div
        className="absolute bottom-2 right-2 w-28 sm:w-36 opacity-40 -rotate-12 animate-shimmer"
        initial={{ opacity: 0, y: 20, x: 20 }}
        whileInView={{ opacity: 0.4, y: 0, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={flowerGold} alt="Flower Ornament Bottom" className="w-full h-auto relative" />
        <div className="light-sweep"></div>
      </motion.div>

      {/* Header */}
      <motion.div
        className="relative max-w-3xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-serif text-gold mb-3">Wedding Details</h2>
        <p className="text-gray-600 italic">
          “Saat yang kita tunggu-tunggu akhirnya menjadi kenyataan.”
        </p>
      </motion.div>

      {/* ✨ Elegant Info Cards with Gold Curves + Floral Background */}
<motion.div
  className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
>
  {[
  {
    icon: <MapPin className="w-12 h-12 text-gold drop-shadow-[0_0_12px_rgba(230,183,169,0.6)]" />,
    title: "Tempat Acara",
    desc: (
      <span className="block font-serif text-[1.05rem] text-gray-700 italic">
        Gedung Vidya Chandra <br />
        <span className="text-rosegold-dark font-medium">Kota Cimahi</span>
      </span>
    ),
  },
  {
    icon: <Calendar className="w-12 h-12 text-gold drop-shadow-[0_0_12px_rgba(230,183,169,0.6)]" />,
    title: "Tanggal",
    desc: (
      <span className="block font-serif text-[1.05rem] text-gray-700 italic">
        Rabu, tanggal <span className="text-rosegold-dark font-semibold">31</span> Desember <br />
        <span className="text-rosegold-dark">Tahun Dua Ribu Dua Puluh Lima</span>
      </span>
    ),
  },
  {
    icon: <Clock className="w-12 h-12 text-gold drop-shadow-[0_0_12px_rgba(230,183,169,0.6)]" />,
    title: "Waktu",
    desc: (
      <span className="block font-serif text-[1.05rem] text-gray-700 italic">
        Pukul <span className="text-rosegold-dark font-semibold">10.00 WIB</span> hingga selesai <br />
        <span className="text-rosegold-dark font-medium">Dengan penuh kebahagiaan</span>
      </span>
    ),
  },
]
.map((item, idx) => (
    <motion.div
      key={idx}
      className="group relative flex flex-col items-center text-center p-8 rounded-3xl border border-rosegold/30 bg-white/40 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(230,183,169,0.45)] overflow-hidden"
      whileHover={{ y: -8 }}
    >
      {/* 🌸 Ornamen bunga emas di belakang */}
      <motion.div
        className={`absolute -top-8 -left-10 opacity-15 blur-[1px] ${item.flowerRotation}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/flower-gold.png"
          alt="Flower Ornament"
          className="w-48 h-auto select-none pointer-events-none animate-pulse-slow"
        />
      </motion.div>

      {/* Border Gradient Glow */}
<div className="absolute inset-0 rounded-3xl border-[1.5px] border-transparent bg-gradient-to-br from-[#F5CBA755] to-[#E6B7A933] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

{/* ✨ Light Sweep Effect */}
<div className="light-sweep-rosegold"></div>


      {/* Icon */}
      <div className="relative mb-4">{item.icon}</div>

      {/* Title */}
      <h3 className="relative text-2xl font-serif text-gold mb-2 tracking-wide z-10">
        {item.title}
      </h3>

      {/* Description */}
      <div className="relative text-center z-10 mt-1 leading-relaxed tracking-wide">
        {item.desc}
      </div>

      {/* 🌿 Ornamen Garis Emas */}
      {idx !== 2 && (
        <motion.div
          className="hidden sm:block absolute right-[-35px] top-1/2 -translate-y-1/2 w-[70px] h-[40px] pointer-events-none z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <defs>
  <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="0">
    <stop offset="0%" stopColor="#E6B7A9" />
    <stop offset="50%" stopColor="#F5CBA7" />
    <stop offset="100%" stopColor="#DFAFA2" />
  </linearGradient>
</defs>

            <path d="M5 40 Q50 5 95 40" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  ))}
</motion.div>


      {/* 🌍 Map Section dengan Label Elegan */}
<motion.div
  className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-gold/40 shadow-lg backdrop-blur-sm bg-white/40 hover:shadow-gold/20 transition-all"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.5 }}
  viewport={{ once: true }}
>
  {/* 🏛️ Label Lokasi */}
  <motion.div
    className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl border border-rosegold/30 shadow-md text-center"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h3 className="text-gold text-xl font-serif mb-1">Lokasi Acara</h3>
    <p className="text-gray-700 text-sm font-medium">
      Gedung Vidya Candra, Sangkuriang — Kota Cimahi
    </p>
  </motion.div>

  {/* 🗺️ Embed Map (lokasi asli) */}
  <iframe
  title="Wedding Location"
  className="w-full h-72 sm:h-96 pointer-events-none"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.463105046991!2d107.54212472582584!3d-6.862774967404937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e406f0b4c52b%3A0xXXXXXXXXXXXXXXX!2sAlun-Alun%20Kota%20Cimahi!5e0!3m2!1sid!2sid!4v1730420000000!5m2!1sid!2sid"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  {/* Tombol buka Maps */}
  <a
    href="https://maps.app.goo.gl/BRfS7HtiQhjpZXQGA"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#fff8e7b3] via-[#fff8e750] to-transparent opacity-0 hover:opacity-100 transition-all duration-500"
  >
    <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-gold font-semibold shadow-md flex items-center gap-2">
      <MapPin className="w-5 h-5" /> Buka di Google Maps
    </span>
  </a>
</motion.div>

      {/* MAP MODAL */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white/90 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 w-[90%] sm:w-[80%] h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-gold font-bold text-lg transition-all"
              >
                ✕
              </button>
              <iframe
                title="Full Wedding Map"
                className="w-full h-full"
                src="https://maps.google.com/maps?q=Gedung%20Vidya%20Candra%20Sangkuriang%20Malang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        )}

        {/* ✨ Orang Tua Mempelai dengan Ornamen Tengah */}
<motion.div
  className="relative max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-serif italic items-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  {/* Orang tua mempelai pria */}
  <div className="text-gray-700 sm:text-right px-4">
    <h4 className="text-lg text-rosegold-dark font-semibold mb-1">
      Pihak Mempelai Pria
    </h4>
    <p className="text-base leading-relaxed">
      <span className="block">Bapak Babeh</span>
      <span className="block">dan Ibu Ummie</span>
    </p>
    <p className="text-sm text-gray-500 mt-1">Orang tua dari Ariyadi</p>
  </div>

  {/* Ornamen pemisah tengah */}
  <motion.div
    className="hidden sm:flex flex-col items-center justify-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-20 h-16"
      fill="none"
      strokeWidth="2"
      stroke="url(#roseGoldGradientCenter)"
      strokeLinecap="round"
    >
      <defs>
        <linearGradient id="roseGoldGradientCenter" x1="0" y1="0" x2="100" y2="0">
          <stop offset="0%" stopColor="#E6B7A9" />
          <stop offset="50%" stopColor="#F5CBA7" />
          <stop offset="100%" stopColor="#DFAFA2" />
        </linearGradient>
      </defs>
      <path d="M10 80 Q50 10 90 80" />
      <path d="M10 85 Q50 15 90 85" opacity="0.5" />
    </svg>
    <p className="text-rosegold-dark text-[1rem] font-semibold mt-1">
      💍
    </p>
  </motion.div>

  {/* Orang tua mempelai wanita */}
  <div className="text-gray-700 sm:text-left px-4">
    <h4 className="text-lg text-rosegold-dark font-semibold mb-1">
      Pihak Mempelai Wanita
    </h4>
    <p className="text-base leading-relaxed">
      <span className="block">Bapak Wowo</span>
      <span className="block">dan Ibu Fatim</span>
    </p>
    <p className="text-sm text-gray-500 mt-1">Orang tua dari Fitri</p>
  </div>
</motion.div>

      </AnimatePresence>

      {/* Footer Quote */}
      <motion.p
        className="relative text-center text-gray-600 text-sm italic mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        “Kami berharap dapat merayakan momen berharga ini bersama Anda.” 💛
      </motion.p>
    </motion.section>
  );
}
