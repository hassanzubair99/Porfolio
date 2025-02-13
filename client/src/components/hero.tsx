import { motion } from "framer-motion";
import ThreeScene from "./three-scene";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              Hassan Zubair
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Frontend Developer • Odoo Developer • UI/UX Designer
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            I create beautiful, functional, and user-friendly digital experiences
            that help businesses grow.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] w-full"
        >
          <ThreeScene />
        </motion.div>
      </div>
    </div>
  );
}