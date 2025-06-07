"use client";

import { useEffect, useState } from "react";

export default function LaunchCountdown() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    launched: false,
  });

  useEffect(() => {
    const releaseDate = new Date("2026-05-26T00:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown((prev) => ({ ...prev, launched: true }));
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
    <section
      className="relative bg-cover bg-center bg-no-repeat py-40 text-white"
      style={{ backgroundImage: "url('/gta6-banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Prepare-se para o lançamento!</h2>
        <p className="text-lg mb-8">Contagem regressiva para GTA VI</p>

        {countdown.launched ? (
          <div className="text-3xl font-bold text-green-400">LANÇADO!</div>
        ) : (
          <>
            <div className="flex justify-center gap-6 text-2xl font-mono">
              {[
                { label: "dias", value: countdown.days },
                { label: "horas", value: countdown.hours },
                { label: "minutos", value: countdown.minutes },
                { label: "segundos", value: countdown.seconds },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center bg-gray-950 rounded-lg px-6 py-4 shadow-md border-2 border-blue-400"
                >
                  <span className="text-4xl font-bold tabular-nums">{value}</span>
                  <span className="text-sm text-gray-400 mt-1">{label}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-pink-600 hover:bg-pink-700 transition px-6 py-2 rounded font-semibold">
              Saiba mais
            </button>
          </>
        )}
      </div>
    </section>
  );
}
