import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="relative py-16 bg-gradient-to-b from-[#fffdfc] via-[#fff8f6] to-[#fae7e0] text-center font-serif border-t border-[#E6B7A9]/30 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* 🌸 Ornamen floral atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-[2px] bg-gradient-to-r from-transparent via-[#E6B7A9] to-transparent rounded-full opacity-60"></div>

      {/* 🌟 Efek cahaya lembut */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,203,167,0.15),transparent_70%)]"></div>

      {/* ✨ Ornamen bunga kiri */}
      <motion.div
        className="absolute bottom-0 left-4 sm:left-12 opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#E6B7A9]"
        >
          <path
            d="M100 10 C80 30, 50 50, 70 80 C90 110, 130 120, 140 160"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="145" cy="165" r="4" fill="currentColor" />
        </svg>
      </motion.div>

      {/* ✨ Ornamen bunga kanan */}
      <motion.div
        className="absolute bottom-0 right-4 sm:right-12 opacity-40 rotate-180"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#E6B7A9]"
        >
          <path
            d="M100 10 C80 30, 50 50, 70 80 C90 110, 130 120, 140 160"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="145" cy="165" r="4" fill="currentColor" />
        </svg>
      </motion.div>

      {/* ✨ Teks utama */}
      <motion.div
        className="relative z-10 text-rosegold-dark"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-[1.15rem] sm:text-[1.25rem] italic">
          Dibuat dengan{" "}
          <motion.span
            className="text-[#E6B7A9] mx-1 inline-block"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💛
          </motion.span>{" "}
          oleh
        </p>

        {/* Nama dengan shimmer dan efek glowing */}
        <a
          href="https://ariyadi.eu.org"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block mt-3 text-[1.3rem] sm:text-[1.4rem] font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#E6B7A9] via-[#F5CBA7] to-[#E6B7A9] hover:scale-[1.05] transition-transform duration-700 ease-out shimmer-link"
        >
          Ariyadi DG
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#E6B7A9] to-transparent rounded-full opacity-80"></span>
        </a>

        {/* Quote pendek */}
        <p className="text-gray-600 italic text-[0.95rem] mt-4 px-6">
          “Setiap sentuhan kode adalah ungkapan cinta dalam bentuk digital.”
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6 italic">
          © 2025 Ariyadi & Fitri Wedding Invitation. All Rights Reserved.
        </p>
      </motion.div>

      {/* ✨ Animasi shimmer */}
      <style>{`
        .shimmer-link {
          background-size: 200% auto;
          animation: shimmerGradient 3s linear infinite;
        }
        @keyframes shimmerGradient {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </motion.footer>
  );
}
