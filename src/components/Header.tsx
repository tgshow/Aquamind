import { Link } from "react-router-dom";
import agua from "../assets/aguacopy.png";

export default function Header() {
  return (
<header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto w-full">
      
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <img src={agua} alt="Zé Gotinha" className="w-10 h-10 object-contain" />

        <div>
          <h1 className="font-bold text-lg">Água Consciente</h1>
          <p className="text-xs text-gray-500">
            Pequenas atitudes, grandes economias
          </p>
        </div>
      </div>

      <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-600">
        <Link to="/">Home</Link>
        <Link to="/desafios">Desafios</Link>
        <Link to="/progresso">Progresso</Link>
      </nav>
    </header>
  );
}