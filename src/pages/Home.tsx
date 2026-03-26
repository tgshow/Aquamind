import { motion } from "motion/react";
import CardsList from "../components/CardsList";
import econ from "../assets/econ.png";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">

      <motion.h1
        className="text-4xl font-bold text-blue-700 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bem-vindo ao Água Consciente
      </motion.h1>

      <motion.p
        className="text-gray-500 text-lg mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pequenas atitudes no dia a dia podem gerar um grande impacto no futuro do planeta.
        Economizar água é uma forma simples de cuidar da vida.
      </motion.p>


      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">


        <motion.img
          src={econ}
          alt="Economia de água"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-sm rounded-xl shadow"
        />


        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left max-w-md"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Cada gota faz a diferença!
          </h2>

          <p className="text-gray-700">
            A água é um recurso essencial, mas limitado. Reduzir o desperdício
            ajuda a preservar o meio ambiente e garantir que as próximas gerações
            também tenham acesso a esse bem tão importante.
          </p>

          <p className="text-gray-700 mt-4">
            Comece com pequenas mudanças e transforme seu dia a dia em um impacto positivo.
          </p>
        </motion.div>

      </div>


      <CardsList />
    </div>
  );
}