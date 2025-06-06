export default function GamesSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Jogos em Destaque</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Jogo 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/games/forza.jpg"
              alt="Forza Horizon 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Forza Horizon 5</h3>
              <p className="text-gray-300 mb-4">Explore paisagens incríveis e corra em alta velocidade no México.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Comprar
              </button>
            </div>
          </div>

          {/* Jogo 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/games/cyberpunk2077.jpg"
              alt="Cyberpunk 2077"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Cyberpunk 2077</h3>
              <p className="text-gray-300 mb-4">Viva uma aventura futurista em Night City cheia de ação e mistérios.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Comprar
              </button>
            </div>
          </div>

          {/* Jogo 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/games/halo.jpg"
              alt="Halo Infinite"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">Halo Infinite</h3>
              <p className="text-gray-300 mb-4">Retorne ao campo de batalha em uma aventura épica de ficção científica.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
