export default function Categorias() {
  const categorias = ["Banho", "Cozinha", "Jardim", "Lavagem"];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Categorias
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categorias.map((cat) => (
          <div
            key={cat}
            className="bg-white p-6 rounded-2xl shadow-sm border text-center"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}