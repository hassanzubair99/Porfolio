import { motion } from "framer-motion";
import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-foreground">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center p-4 bg-card rounded-lg hover:shadow-lg transition-shadow"
          >
            <skill.icon className="w-8 h-8 md:w-12 md:h-12 mb-2 text-primary" />
            <span className="text-xs md:text-sm font-medium text-foreground text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}