import FadeUp from "../components/FadeUp";

export default function Progresso() {
  return (
    <div className="p-6">
      <FadeUp>
        <h2 className="text-xl font-bold mb-4">
          Seu progresso
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="bg-green-100 p-4 rounded-lg">
          Você economizou 120L de água 🎉
        </div>
      </FadeUp>
    </div>
  );
}