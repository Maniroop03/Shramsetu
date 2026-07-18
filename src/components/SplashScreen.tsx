import { motion, AnimatePresence } from "framer-motion";
import logo from "../shramsetu-logo.png";

export default function SplashScreen() {
  const letters = "Shram".split("");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="ShramSetu"
         className="h-52 w-52 mb-8"
          initial={{ scale: 0.2, rotate: -360, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Brand Name */}
        <div className="flex text-8xl font-extrabold">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1 + index * 0.08,
                duration: 0.3,
              }}
            >
              {letter}
            </motion.span>
          ))}

          <motion.span
            className="text-brand-500"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.45,
              duration: 0.5,
            }}
          >
            Setu
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
         className="mt-6 text-2xl text-slate-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.6,
          }}
        >
          Connecting Skills. Creating Opportunities.
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}