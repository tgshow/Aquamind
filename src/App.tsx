import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence, motion } from "motion/react";
import { DesafiosProvider } from "./context/DesafiosContext";

import Home from "./pages/Home";
import Desafios from "./pages/Desafios";
import Progresso from "./pages/Progresso";



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/desafios" element={<Desafios />} />
          <Route path="/progresso" element={<Progresso />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc]">
        <Header />

        <main className="flex-1">
          <AnimatedRoutes />
        </main>
       
        
      </div>
    </Router>
  );
}