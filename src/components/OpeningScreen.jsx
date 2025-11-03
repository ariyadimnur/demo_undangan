import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function OpeningScreen({ onOpen }) {
  const [closing, setClosing] = useState(false);
  const bokehs = Array.from({ length: 20 }, (_, i) => i);
  const chimeSound = useRef(null);

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpen = () => {
    if (chimeSound.current) {
      chimeSound.current.currentTime = 0;
      chimeSound.current.play();
    }
    setClosing(true);
    setTimeout(() => onOpen(), 1200);
  };

  return (
    <AnimatePresence>
      {!closing && (
        <motion.section
          className="fixed inset-0 flex flex-col justify-center items-center px-4 sm:px-8 py-10 sm:py-0 overflow-y-auto overflow-x-hidden z-50 font-serif text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* 🔔 Suara */}
          <audio ref={chimeSound} src="/src/assets/sounds/chime.wav" preload="auto" />

          {/* 🌸 Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fffefc] via-[#fff7f3] to-[#f7e6de]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,203,167,0.25),transparent_75%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gold-dust.png')] opacity-20 mix-blend-overlay" />

          {/* Title */}
          <motion.h1
            className="relative text-4xl sm:text-6xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#E6B7A9] via-[#F5CBA7] to-[#E6B7A9] drop-shadow-[0_4px_10px_rgba(230,183,169,0.4)] shimmer-text z-10 mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Ariyadi & Fitri
          </motion.h1>

          {/* Quote */}
          <motion.p
            className="text-rosegold-dark italic text-base sm:text-lg mt-3 z-10 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            “The moment we’ve been waiting.”
          </motion.p>

          {/* 💍 Tombol Elegan dengan Slow Pulse Glow */}
<motion.div
  className="relative mt-10 flex justify-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.2 }}
>
  {/* 🌟 Pulse Glow di belakang tombol */}
  <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(245,203,167,0.35)_0%,transparent_70%)] animate-pulse-glow blur-xl" />

  {/* 🌸 Tombol utama */}
  <motion.button
    onClick={handleOpen}
    className="relative px-10 py-3.5 text-lg sm:text-xl font-serif tracking-wide text-white rounded-full overflow-hidden shadow-[0_4px_20px_rgba(230,183,169,0.35)] transition-all duration-700"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.97 }}
  >
    {/* Gradasi shimmer berjalan */}
    <span className="absolute inset-0 bg-gradient-to-r from-[#E6B7A9] via-[#F5CBA7] to-[#E6B7A9] rounded-full animate-gradient-move opacity-95"></span>

    {/* Efek shimmer lembut saat hover */}
    <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_70%)] opacity-0 hover:opacity-80 transition-opacity duration-700 rounded-full"></span>

    {/* Teks */}
    <span className="relative z-10 font-semibold drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
      💍 Buka Undangan
    </span>
  </motion.button>

  {/* ✨ Animasi shimmer & pulse glow */}
  <style>{`
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient-move {
      background-size: 200% 200%;
      animation: gradientMove 6s ease infinite;
    }

    @keyframes pulseGlow {
      0%, 100% {
        transform: scale(1);
        opacity: 0.45;
        box-shadow: 0 0 30px rgba(245,203,167,0.5), 0 0 60px rgba(230,183,169,0.3);
      }
      50% {
        transform: scale(1.05);
        opacity: 0.8;
        box-shadow: 0 0 45px rgba(245,203,167,0.6), 0 0 90px rgba(230,183,169,0.4);
      }
    }
    .animate-pulse-glow {
      animation: pulseGlow 3.5s ease-in-out infinite;
    }
  `}</style>
</motion.div>

          {/* 💞 Foto Mempelai dengan animasi fade elegan */}
<motion.div
  className="mt-12 grid grid-cols-2 gap-6 sm:gap-10 items-center justify-items-center z-10 max-w-md sm:max-w-2xl mx-auto"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } },
  }}
>
  {/* 🕴️ Mempelai Pria */}
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#E6B7A9] shadow-[0_4px_20px_rgba(230,183,169,0.3)]">
      <img
        src="/src/assets/ariyadi.png"
        alt="Mempelai Pria"
        className="w-full h-full object-cover"
      />
      {/* Lapisan efek gold halus */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5cba730]" />
    </div>
    <p className="mt-2 text-rosegold-dark font-serif text-base sm:text-lg italic tracking-wide">
      Mempelai Pria
    </p>
  </motion.div>

  {/* 👰 Mempelai Wanita */}
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#E6B7A9] shadow-[0_4px_20px_rgba(230,183,169,0.3)]">
      <img
        src="/src/assets/fitri.png"
        alt="Mempelai Wanita"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5cba730]" />
    </div>
    <p className="mt-2 text-rosegold-dark font-serif text-base sm:text-lg italic tracking-wide">
      Mempelai Wanita
    </p>
  </motion.div>
</motion.div>


          {/* Countdown */}
          <motion.div
            className="mt-8 sm:mt-10 text-center z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <p className="text-rosegold-dark font-serif italic text-base sm:text-lg mb-5">
              Menuju Hari Bahagia Kami
            </p>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 relative z-10">
              {[
                { label: "Hari", value: timeLeft.days },
                { label: "Jam", value: timeLeft.hours },
                { label: "Menit", value: timeLeft.minutes },
                { label: "Detik", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-gradient-to-b from-[#fffaf8] to-[#fbeee7] shadow-[inset_0_0_10px_rgba(230,183,169,0.3),0_4px_15px_rgba(230,183,169,0.4)] overflow-hidden">
                    <div className="absolute inset-0 rounded-full border-[2px] border-transparent bg-[conic-gradient(from_0deg,rgba(245,203,167,0.8)_0deg,rgba(230,183,169,0.4)_120deg,transparent_360deg)] animate-rotate-shimmer"></div>
                    <span className="relative text-2xl sm:text-3xl font-serif font-semibold text-[#E6B7A9] drop-shadow-[0_2px_6px_rgba(230,183,169,0.5)]">
                      {item.value}
                    </span>
                  </div>
                  <span className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm md:text-base font-serif italic">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.p
              className="mt-3 text-rosegold-dark font-serif italic text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md mx-auto leading-relaxed z-10 px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2.2 }}
            >
              “Ariyadi & Fitri Wedding” 💞
            </motion.p>
          </motion.div>

          {/* Animasi shimmer */}
          <style>{`
            @keyframes rotate-shimmer {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .animate-rotate-shimmer {
              animation: rotate-shimmer 5s linear infinite;
            }
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
            .shimmer-text {
              background-size: 200% auto;
              animation: shimmer 6s linear infinite;
            }
          `}</style>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
