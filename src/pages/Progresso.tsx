import FadeUp from "../components/FadeUp";
import { useDesafios } from "../context/DesafiosContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Progresso() {
  const { desafios } = useDesafios();

  const concluidos = desafios.filter(d => d.concluido);

  const totalEconomizado = concluidos.reduce((acc, d) => acc + d.economia, 0);
  const totalPossivel = desafios.reduce((acc, d) => acc + d.economia, 0);

  const porcentagem = totalPossivel > 0
    ? Math.round((totalEconomizado / totalPossivel) * 100)
    : 0;

  // ⭐ XP e nível
  const xp = totalEconomizado;
  const nivel = Math.floor(xp / 100);

  // 📊 Dados do gráfico
  const data = desafios.map(d => ({
    nome: d.nome.slice(0, 10),
    economia: d.concluido ? d.economia : 0,
  }));

  // 🏆 Ranking fake
  const ranking = [
    { nome: "João", xp: 320 },
    { nome: "Maria", xp: 280 },
    { nome: "Você", xp: xp },
    { nome: "Carlos", xp: 150 },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <FadeUp>
        <h2 className="text-3xl font-bold mb-6">
          📊 Dashboard
        </h2>
      </FadeUp>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-blue-100 p-4 rounded-xl">
          💧 <b>{totalEconomizado}L</b>
          <p className="text-sm">Economia</p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl">
          ✅ <b>{concluidos.length}</b>
          <p className="text-sm">Concluídos</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl">
          📈 <b>{porcentagem}%</b>
          <p className="text-sm">Progresso</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          ⭐ <b>Nível {nivel}</b>
          <p className="text-sm">{xp} XP</p>
        </div>

      </div>

      {/* BARRA */}
      <div className="mb-6">
        <p className="text-sm mb-2">Progresso geral</p>
        <div className="w-full bg-gray-200 h-4 rounded-full">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${porcentagem}%` }}
          />
        </div>
      </div>

      {/* GRÁFICO */}
      <FadeUp>
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h3 className="mb-4 font-semibold">📊 Economia por desafio</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="economia" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </FadeUp>

      {/* RANKING */}
      <FadeUp>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-4 font-semibold">🏆 Ranking</h3>

          <ul className="space-y-2">
            {ranking.map((user, i) => (
              <li key={i} className="flex justify-between">
                <span>
                  {i + 1}º - {user.nome}
                </span>
                <span>{user.xp} XP</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>

    </div>
  );
}