"use client";

import { useEffect, useState } from "react";

export default function LaunchCountdownCube() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    launched: false,
  });

  useEffect(() => {
    const releaseDate = new Date();
    releaseDate.setMonth(releaseDate.getMonth() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown((prev) => ({ ...prev, launched: true }));
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
        launched: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-zinc-900 to-black py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Prepare-se para o lançamento!</h2>
          <p className="text-lg">Contagem regressiva para a nova experiência gamificada</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Cube */}
          <div className="relative w-[200px] h-[200px] perspective-[1000px]">
            {/* Aqui está a animação aplicada */}
            <div className="absolute w-full h-full animate-spin-slow [transform-style:preserve-3d]">
              <div className="absolute w-full h-full bg-blue-500/90 rounded-lg flex items-center justify-center text-xl font-bold [transform:rotateY(0deg)_translateZ(100px)]">
                RPG
              </div>
              <div className="absolute w-full h-full bg-green-500/90 rounded-lg flex items-center justify-center text-xl font-bold [transform:rotateY(90deg)_translateZ(100px)]">
                Ação
              </div>
              <div className="absolute w-full h-full bg-yellow-500/90 rounded-lg flex items-center justify-center text-xl font-bold [transform:rotateY(180deg)_translateZ(100px)]">
                Aventura
              </div>
              <div className="absolute w-full h-full bg-red-500/90 rounded-lg flex items-center justify-center text-xl font-bold [transform:rotateY(-90deg)_translateZ(100px)]">
                Estratégia
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="text-center space-y-4">
            {countdown.launched ? (
              <div className="text-3xl font-bold text-green-400">LANÇADO!</div>
            ) : (
              <>
                <div className="flex justify-center gap-4 text-2xl font-mono">
                  <div className="flex flex-col items-center">
                    <span>{countdown.days}</span>
                    <span className="text-sm text-gray-400">dias</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{countdown.hours}</span>
                    <span className="text-sm text-gray-400">horas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{countdown.minutes}</span>
                    <span className="text-sm text-gray-400">minutos</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{countdown.seconds}</span>
                    <span className="text-sm text-gray-400">segundos</span>
                  </div>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition">
                  {countdown.launched ? "COMPRAR AGORA" : "Saiba Mais"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
