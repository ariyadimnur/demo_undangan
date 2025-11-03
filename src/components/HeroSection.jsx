import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wedding from "../assets/wedding.png";
import background from "../assets/backro.jpg";

export default function HeroSection() {
  const bokehs = Array.from({ length: 10 }, (_, i) => i);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T10:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Background image with slow zoom effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffffb3] via-[#ffffffcc] to-[#f5f5f5e6]" />

      {/* ✨ Cahaya flare sinematik */}
      {bokehs.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold opacity-30 blur-3xl"
          style={{
            width: `${Math.random() * 120 + 80}px`,
            height: `${Math.random() * 120 + 80}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(40px) brightness(1.3)",
          }}
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{
            scale: [0.8, 1.2, 0.9],
            opacity: [0.2, 0.5, 0.3],
            y: [-30, 20, -10],
            x: [0, 10, -10],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Foto pasangan */}
      <motion.img
        src={wedding}
        alt="Couple"
        className="relative rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover border-4 border-gold mb-6 shadow-xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Nama pasangan */}
      <motion.h1
        className="relative text-5xl sm:text-6xl font-serif text-gold mb-2 z-10 animate-glow"
        initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.3 }}
      >
        Ariyadi & Fitri
      </motion.h1>

      {/* Tanggal */}
      <motion.p
  className="relative text-2xl sm:text-3xl font-serif text-rosegold-dark italic tracking-wide z-10 mt-2"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.3 }}
>
  31 Desember 2025
  <span className="block w-24 sm:w-28 mx-auto mt-2 h-[2px] bg-gradient-to-r from-transparent via-[#E6B7A9] to-transparent rounded-full opacity-80"></span>
</motion.p>


            {/* Countdown Timer */}
      <motion.div
        className="relative mt-8 flex justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds <= 0 ? (
          <div className="bg-white/60 backdrop-blur-sm border border-gold rounded-xl px-6 py-4 shadow-md">
            <p className="text-gold font-semibold text-lg sm:text-xl">
              💍 Today is Our Special Day!
            </p>
          </div>
        ) : (
          <div className="bg-white/60 backdrop-blur-sm border border-gold rounded-2xl px-6 py-4 shadow-lg flex gap-3 sm:gap-5">
            {/* Days */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gold animate-pulse-glow">
                {timeLeft.days}
                </span>

              <span className="text-xs sm:text-sm text-gray-600">Hari</span>
            </div>

            <span className="text-gold text-3xl sm:text-4xl font-semibold">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gold animate-pulse-glow">
                {timeLeft.hours}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Jam</span>
            </div>

            <span className="text-gold text-3xl sm:text-4xl font-semibold">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gold animate-pulse-glow">
                {timeLeft.minutes}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Menit</span>
            </div>

            <span className="text-gold text-3xl sm:text-4xl font-semibold">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-gold animate-pulse-glow">
                {timeLeft.seconds}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Detik</span>
            </div>
          </div>
        )}
      </motion.div>

    </motion.section>
  );
}
