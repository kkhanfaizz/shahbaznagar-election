"use client";

import { motion } from "framer-motion";

export default function TaufeeqPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#3B82F6] text-white font-sans">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </div>

      {/* Header Section */}
      <header className="relative text-center py-10 z-10">
        <h1 className="text-5xl font-extrabold leading-snug">
          <span className="block text-yellow-400 drop-shadow-lg">
            आप करो समर्थन
          </span>
          <span className="block text-pink-400">हम करेंगे परिवर्तन</span>
        </h1>

        {/* Animated Slogan Line */}
        <div className="overflow-hidden mt-6">
          <motion.div
            className="text-xl font-semibold text-blue-200 whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            🌟 वोट दो विकास को — साथ चलो विश्वास को 🌟 | 💪 बदलाव की राह पर —
            एक नई सोच, एक नया नेतृत्व 💫 |
          </motion.div>
        </div>
      </header>

      {/* Main Body */}
      <main className="relative z-10 text-center px-6 pb-16">
        <motion.h2
          className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent inline-block mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✨ नयी सोच, नया उम्मीदवार ✨
        </motion.h2>

        <motion.h3
          className="text-2xl font-semibold text-blue-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          ग्राम पंचायत - शहबाजनगर
        </motion.h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:w-1/2 border border-white/20 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-blue-200 mb-2 font-semibold">
              संघर्षशील कर्मठ
            </p>
            <h4 className="text-5xl font-extrabold text-yellow-400 leading-tight mb-4">
              ईमानदार<br /> प्रत्याशी
            </h4>
            <p className="text-3xl bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text font-bold inline-block px-6 py-2 rounded-full shadow-inner">
              मोह. तौफ़ीक़
            </p>
          </motion.div>

          {/* Right Section - Photo */}
          <motion.div
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-400 shadow-[0_0_40px_#fb7185]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <img
              src="/images/taufeeq.jpg"
              alt="Mohd Taufeeq"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/10 backdrop-blur-md py-6 text-center border-t border-white/20">
        <p className="text-lg font-semibold text-yellow-300">
          निवेदक - समस्त क्षेत्रवासी व मित्रगण
        </p>
      </footer>
    </div>
  );
}
