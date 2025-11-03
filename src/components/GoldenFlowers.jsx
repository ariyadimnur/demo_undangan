import { motion } from "framer-motion";

const flowers = Array.from({ length: 10 }, (_, i) => i);

export default function GoldenFlowers() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((i) => (
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute opacity-30"
          style={{
            width: `${Math.random() * 80 + 60}px`,
            height: `${Math.random() * 80 + 60}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            filter: "drop-shadow(0 0 8px #C9A646aa)",
          }}
          initial={{
            rotate: 0,
            y: 0,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M32 4c2 5 6 10 10 14s9 8 14 10c-5 2-10 6-14 10s-8 9-10 14c-2-5-6-10-10-14s-9-8-14-10c5-2 10-6 14-10S30 9 32 4z"
            stroke="#C9A646"
            fill="#C9A64622"
            strokeWidth="1.5"
          />
        </motion.svg>
      ))}
    </div>
  );
}
