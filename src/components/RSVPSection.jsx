import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Loader2 } from "lucide-react";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    nama: "",
    kehadiran: "",
    ucapan: "",
  });

  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.kehadiran) {
      alert("Mohon isi nama dan kehadiran ya 🙏");
      return;
    }

    setLoading(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbx.../exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setLoading(false);
      setPopupVisible(true);
      setFormData({ nama: "", kehadiran: "", ucapan: "" });
      setTimeout(() => setPopupVisible(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengirim data 😢");
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="rsvp"
      className="relative py-24 px-6 bg-gradient-to-b from-[#fff8f6] via-[#fff3ef] to-[#fae7e0] overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Ornamen Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10"></div>

      {/* Header */}
      <motion.div
        className="relative text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-serif text-rosegold-dark mb-3">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-gray-600 italic font-serif text-[1.05rem]">
          “Kehadiran Anda merupakan kehormatan dan kebahagiaan bagi kami.”
        </p>
      </motion.div>

      {/* Form RSVP */}
      <motion.div
        className="relative max-w-lg mx-auto bg-white/60 backdrop-blur-md border border-rosegold/30 rounded-3xl p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 font-serif">
          {/* Nama */}
          <div className="flex flex-col">
            <label className="text-rosegold-dark text-[1.05rem] mb-2 italic">
              ✒️ Nama Lengkap Anda
            </label>
            <input
              type="text"
              placeholder="Tuliskan nama lengkap Anda..."
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
              className="rounded-2xl border border-rosegold/50 bg-white/70 px-5 py-3.5 text-gray-800 placeholder-rosegold-dark/60 focus:outline-none focus:ring-2 focus:ring-rosegold-light italic transition-all duration-500"
            />
          </div>

          {/* Kehadiran */}
          <div className="flex flex-col">
            <label className="text-rosegold-dark text-[1.05rem] mb-2 italic">
              💌 Apakah Anda akan hadir?
            </label>
            <select
              value={formData.kehadiran}
              onChange={(e) =>
                setFormData({ ...formData, kehadiran: e.target.value })
              }
              className="rounded-2xl border border-rosegold/50 bg-white/70 px-5 py-3.5 text-gray-800 italic focus:outline-none focus:ring-2 focus:ring-rosegold-light transition-all duration-500"
            >
              <option value="">Silakan pilih salah satu...</option>
              <option value="Hadir">
                Ya, dengan senang hati saya akan hadir
              </option>
              <option value="Tidak Hadir">Maaf, saya berhalangan hadir</option>
            </select>
          </div>

          {/* Ucapan */}
          <div className="flex flex-col">
            <label className="text-rosegold-dark text-[1.05rem] mb-2 italic">
              🕊️ Ucapan & Doa
            </label>
            <textarea
              placeholder="Tuliskan doa dan pesan Anda..."
              rows="3"
              value={formData.ucapan}
              onChange={(e) =>
                setFormData({ ...formData, ucapan: e.target.value })
              }
              className="rounded-2xl border border-rosegold/50 bg-white/70 px-5 py-3 text-gray-800 placeholder-rosegold-dark/60 italic focus:outline-none focus:ring-2 focus:ring-rosegold-light transition-all duration-500"
            />
          </div>

          {/* Tombol */}
          <motion.button
            type="submit"
            disabled={loading}
            className="relative mt-4 w-full bg-gradient-to-r from-[#F5CBA7] via-[#E6B7A9] to-[#DFAFA2] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 flex items-center justify-center gap-2"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Mengirim...
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 fill-white/90" />
                Kirim Konfirmasi
                <Heart className="w-5 h-5 fill-white/90" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* ✨ Popup shimmer emas */}
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/95 border border-[#E6B7A9]/40 rounded-3xl shadow-[0_8px_40px_rgba(230,183,169,0.3)] p-10 text-center max-w-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Efek shimmer emas di background */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,203,167,0.25),rgba(230,183,169,0.2),rgba(245,203,167,0.25))] animate-goldShimmer rounded-3xl"></div>

              {/* Glow lingkaran lembut */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F5CBA7]/40 via-[#E6B7A9]/30 to-[#F5CBA7]/40 blur-xl rounded-3xl opacity-70"></div>

              {/* Isi popup */}
              <div className="relative z-10">
                <Heart className="w-12 h-12 mx-auto text-[#E6B7A9] mb-4 animate-heartBeat" />
                <h3 className="text-3xl font-serif text-rosegold-dark mb-2">
                  Terima Kasih!
                </h3>
                <p className="text-gray-700 italic">
                  Data kehadiran Anda telah kami terima dengan penuh sukacita 💞
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animasi shimmer & heartbeat */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-goldShimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-heartBeat {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Footer */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 italic font-serif text-[1rem]">
          “Kami sangat mengharapkan kehadiran Anda untuk berbagi kebahagiaan bersama kami.”
        </p>
        <p className="text-rosegold-dark mt-2 font-medium font-serif">
          Mohon konfirmasi kehadiran sebelum{" "}
          <span className="italic">31 Desember 2025</span>.
        </p>
      </motion.div>
    </motion.section>
  );
}
