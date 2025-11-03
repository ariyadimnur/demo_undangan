import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function WishesSection() {
  const flowerParticles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <motion.section
      id="wishes"
      className="relative py-28 px-6 bg-gradient-to-b from-[#fffdfc] via-[#fff8f6] to-[#fae7e0] overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 🌸 Background motif */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10"></div>

      {/* 🌿 Partikel bunga lembut */}
      {flowerParticles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-[#E6B7A9]/30 via-[#F5CBA7]/20 to-transparent blur-2xl"
          style={{
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* 🩵 Konten utama */}
      <motion.div
        className="relative text-center max-w-3xl mx-auto z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <h2 className="text-4xl sm:text-5xl font-serif text-rosegold-dark mb-6">
          Ungkapan Terima Kasih
        </h2>

        {/* Garis dekorasi shimmer */}
        <div className="w-44 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#E6B7A9] to-transparent animate-shimmer" />

        {/* Kalimat */}
        <motion.p
          className="text-gray-700 italic font-serif text-[1.15rem] leading-relaxed mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          “Terima kasih atas setiap doa, kasih, dan kehadiran Anda yang telah
          menjadi bagian dari hari bahagia kami. Semoga Tuhan membalas dengan
          cinta dan kebahagiaan yang berlimpah.”
        </motion.p>

        {/* Ikon hati animasi */}
        <motion.div
          className="flex justify-center mt-8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-10 h-10 text-rosegold-dark drop-shadow-[0_4px_10px_rgba(230,183,169,0.4)]" />
        </motion.div>

        {/* Nama pasangan */}
        <motion.h3
          className="mt-10 text-2xl sm:text-3xl font-serif text-rosegold-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Ariyadi & Fitri
        </motion.h3>

        {/* Tanggal */}
        <p className="text-gray-600 italic font-serif mt-2">
          31 Desember 2025
        </p>
      </motion.div>

      {/* ✨ Efek shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 5s linear infinite;
        }
      `}</style>

      {/* 🌤 Fade lembut ke putih (transisi ke footer) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#fffaf8e8] to-white pointer-events-none"></div>
    </motion.section>
  );
}
