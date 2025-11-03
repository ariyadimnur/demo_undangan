import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Beranda", href: "#home" },
    { name: "Detail Acara", href: "#details" },
    { name: "Galeri", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
    { name: "Ucapan & Doa", href: "#wishes" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-lg bg-white/60 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3 sm:py-4">
        {/* Logo / Nama */}
        <a
          href="#home"
          className="text-2xl font-serif text-rosegold-dark tracking-wide hover:text-[#F5CBA7] transition-all duration-500"
        >
          Ariyadi & Fitri
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-[1.05rem] font-serif text-gray-700">
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={link.href}
                className="relative group transition-all duration-500"
              >
                <span className="text-rosegold-dark group-hover:text-[#E6B7A9] transition-all duration-500">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#F5CBA7] to-[#E6B7A9] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Tombol menu HP */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-rosegold-dark focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/80 backdrop-blur-md border-t border-rosegold/20 shadow-lg"
        >
          <ul className="flex flex-col text-center py-4 text-[1.05rem] font-serif text-gray-700">
            {links.map((link, i) => (
              <li key={i} className="py-2">
                <a
                  href={link.href}
                  className="block text-rosegold-dark hover:text-[#E6B7A9] transition-all duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
