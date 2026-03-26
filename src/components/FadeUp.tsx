import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function FadeUp({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}