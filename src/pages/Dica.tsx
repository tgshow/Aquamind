import FadeUp from "../components/FadeUp";

export default function Dica() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <FadeUp>
        <h1 className="text-2xl font-bold mb-4 text-blue-700">
          Dicas para economizar água
        </h1>
      </FadeUp>

      <FadeUp>
        <p>Feche a torneira ao escovar os dentes.</p>
      </FadeUp>

      <FadeUp>
        <p>Reduza o tempo de banho.</p>
      </FadeUp>
    </div>
  );
}