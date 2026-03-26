import { motion } from "motion/react";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function CardsList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid gap-6 max-w-4xl mx-auto"
    >
      {[1, 2, 3].map((_, i) => (
        <motion.div
          key={i}
          variants={item}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <h2 className="font-bold text-blue-700 mb-2">
            Consumo de água #{i + 1}
          </h2>
          <p className="text-gray-700">
            O desperdício de água impacta diretamente o meio ambiente e o abastecimento.
            Pequenas atitudes fazem grande diferença.
          </p>

          
        </motion.div>
      ))}
    </motion.div>
  );
}