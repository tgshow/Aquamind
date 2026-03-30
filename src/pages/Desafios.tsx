import FadeUp from "../components/FadeUp";
import { useDesafios } from "../context/DesafiosContext";

export default function Desafios() {
  const { desafios, toggleDesafio } = useDesafios();

  return (
    <div className="p-6 grid gap-4">
      {desafios.map((d, i) => (
        <FadeUp key={i}>
          <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            
            <div>
              <p className="font-medium">{d.nome}</p>
              <p className="text-xs text-gray-500">
                Economia: {d.economia}L
              </p>
            </div>

            <button
              onClick={() => toggleDesafio(i)}
              className={`px-4 py-2 rounded-lg text-sm ${
                d.concluido ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              {d.concluido ? "✔ Concluído" : "Marcar"}
            </button>

          </div>
        </FadeUp>
      ))}
    </div>
  );
}