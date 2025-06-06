"use client";

import { useEffect, useState } from "react";

export default function GamesSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('http://localhost:4000/games');
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error("Erro ao buscar os jogos:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games
            .filter((game) => game.tags.includes("featured"))
            .map((game) => (
              <div
                key={game.id}
                className="bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={`/images/${game.image.split("/").pop()}`}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold">{game.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{game.genres.join(", ")}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-green-400 font-semibold">
                      R${game.price.toFixed(2)}
                    </span>
                    {game.discount > 0 && (
                      <span className="text-red-400 line-through text-sm">
                        R${game.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
