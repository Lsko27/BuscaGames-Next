"use client";

import { useEffect, useState } from "react";

export default function GamesSection() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("http://localhost:4000/games");
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error("Erro ao buscar os jogos:", error);
      }
    };

    fetchGames();
  }, []);

  // Renderiza as estrelas baseado na avaliação
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.384 2.455c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L3.615 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      );
    }
    if (halfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27l-5.18 3.03 1.11-6.49L.45 7.97l6.53-.95L10 1l2.99 5.02 6.53.95-4.52 4.84 1.11 6.49z" />
        </svg>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-500 inline-block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118L12 13.347l-3.384 2.455c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L4.615 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"
          />
        </svg>
      );
    }

    return stars;
  };

  // Filtra e combina os jogos para exibir
  const getFeaturedGames = () => {
    if (games.length === 0) return [];

    // 2 jogos mais baratos
    const cheapest = games
      .slice()
      .sort((a, b) => a.price - b.price)
      .slice(0, 2);

    // 2 melhores avaliados que não estejam nos baratos
    const bestRated = games
      .slice()
      .filter((game) => !cheapest.some((c) => c.id === game.id))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 2);

    // Combina os jogos
    let combinedGames = [...cheapest, ...bestRated];

    // Completa até 4 jogos, se necessário
    if (combinedGames.length < 4) {
      const excludedIds = combinedGames.map((g) => g.id);
      const extraGames = games
        .filter((game) => !excludedIds.includes(game.id))
        .slice(0, 4 - combinedGames.length);
      combinedGames = [...combinedGames, ...extraGames];
    }

    return combinedGames;
  };

  const featuredGames = getFeaturedGames();

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Jogos em Destaque
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {featuredGames.map((game) => {
            const imageUrl = game.image
              ? `http://localhost:4000/${encodeURI(game.image)}`
              : "/fallback-image.png";

            return (
              <div
                key={game.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-[0_0_15px_5px_rgba(135,206,250,0.5)]"
              >
                <img
                  src={imageUrl}
                  alt={game.title ?? "Game image"}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
                  loading="lazy"
                />

                {/* Fundo preto semi-transparente */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Conteúdo que aparece no hover */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {game.title ?? "Título não disponível"}
                  </h3>

                  <div className="mb-2 flex items-center gap-3">
                    {game.discount > 0 ? (
                      <>
                        <span className="line-through text-gray-400 text-sm">
                          R$ {game.originalPrice?.toFixed(2)}
                        </span>
                        <span className="text-yellow-400 font-bold text-lg">
                          R$ {game.price?.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-yellow-400 font-bold text-lg">
                        R$ {game.price?.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {game.genres?.map((genre, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 text-sm px-2 py-1 rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">{renderStars(game.rating ?? 0)}</div>
                    <button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 active:bg-green-800 transition-colors text-white font-semibold px-4 py-2 rounded"
                    >
                      + Carrinho
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
