import { useState } from "react";
import FadeUp from "../components/FadeUp";
import { desafiosData } from "../data/desafios";

export default function Progresso() {
  // adiciona "concluido" dinamicamente
  const [desafios, setDesafios] = useState(
    desafiosData.map(d => ({ ...d, concluido: false }))
  );

  const toggleDesafio = (index: number) => {
    const novos = [...desafios];
    novos[index].concluido = !novos[index].concluido;
    setDesafios(novos);
  };

  const totalEconomizado = desafios
    .filter(d => d.concluido)
    .reduce((acc, d) => acc + d.economia, 0);

  const totalPossivel = desafios.reduce((acc, d) => acc + d.economia, 0);

  const porcentagem = Math.round((totalEconomizado / totalPossivel) * 100);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <FadeUp>
        <h2 className="text-2xl font-bold mb-6">
          Seu progresso
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="bg-green-100 p-6 rounded-xl mb-6">
          💧 Você economizou {totalEconomizado}L de água
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mb-6">
          <p className="mb-2 text-sm text-gray-600">
            Progresso ({porcentagem}%)
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${porcentagem}%` }}
            />
          </div>
        </div>
      </FadeUp>

      <div className="grid gap-4">
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

    </div>
  );
}