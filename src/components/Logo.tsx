import logo from "../shramsetu-logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Logo({ light = false }: { light?: boolean }) {
  const letters = "Shram".split("");

  return (
    <Link to="/" className="flex items-center gap-2">
      {/* Animated Logo */}
      <motion.img
        src={logo}
        alt="ShramSetu Logo"
        className="h-10 w-10 object-contain"
        initial={{
          scale: 0.2,
          rotate: -360,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.08,
          rotate: 10,
          transition: { duration: 0.3 },
        }}
      />

      {/* Animated Text */}
      <span
        className={`flex items-center text-xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9 + index * 0.08,
              duration: 0.3,
            }}
          >
            {letter}
          </motion.span>
        ))}

        <motion.span
          className="text-brand-500"
          initial={{ x: 35, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.35,
            duration: 0.5,
          }}
        >
          Setu
        </motion.span>
      </span>
    </Link>
  );
}