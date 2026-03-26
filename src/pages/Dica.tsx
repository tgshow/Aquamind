import { useState } from "react";

// 📦 dicas
const dicas = [
  "Feche a torneira ao escovar os dentes.",
  "Reduza o tempo de banho para até 5 minutos.",
  "Conserte vazamentos imediatamente.",
  "Use balde ao lavar o carro.",
  "Reutilize água da máquina de lavar.",
  "Evite lavar calçadas com mangueira.",
  "Regue plantas no início da manhã.",
  "Use regador em vez de mangueira.",
  "Instale arejadores nas torneiras.",
  "Junte roupas para lavar de uma vez.",
  "Desligue a torneira ao ensaboar louças.",
  "Use descarga com caixa acoplada econômica.",
  "Evite deixar torneiras pingando.",
  "Use água da chuva quando possível.",
  "Cubra piscinas para evitar evaporação.",
  "Evite banhos demorados."
];

export default function Dica() {
  const [virado, setVirado] = useState(false);
  const [dica, setDica] = useState(dicas[0]);

  function gerarNovaDica() {
    const random = Math.floor(Math.random() * dicas.length);
    setDica(dicas[random]);
  }

  function handleClick() {
    setVirado(!virado);

    // quando voltar pra frente → troca dica
    if (virado) {
      gerarNovaDica();
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] p-4">

      <div
        className="w-72 h-72 md:w-80 md:h-80 perspective cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style ${
            virado ? "rotate-y-180" : ""
          }`}
        >

          {/* FRENTE */}
          <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white rounded-3xl flex items-center justify-center text-center p-6 shadow-lg">
            <h2 className="text-xl font-bold">
              💧 Dica do Dia
              <br />
              <span className="text-sm font-normal mt-2 block">
                Clique para ver
              </span>
            </h2>
          </div>

          {/* VERSO */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-gray-700 rounded-3xl flex items-center justify-center text-center p-6 shadow-lg border">
            <p className="text-lg">{dica}</p>
          </div>

        </div>
      </div>

    </div>
  );
}