import CardsList from "../components/CardsList";

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Bem-vindo ao Água Consciente
      </h1>
      <p className="text-gray-500 text-lg">
        
      </p>
      <CardsList />
    </div>
  );
}