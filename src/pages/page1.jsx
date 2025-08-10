import React from "react";
import { Link } from "react-router-dom";
import "../css/page1.css"; // animatsiyalar shu faylda

const PageNotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-radial from-[#1a0020] via-[#0a0010] to-black relative overflow-hidden">
      
      {/* Dekorativ neon orbs */}
      <div aria-hidden className="absolute -left-28 -top-20 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-3xl animate-orb"></div>
      <div aria-hidden className="absolute -right-28 -bottom-20 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl animate-orb delay-2000"></div>

      {/* Kontent */}
      <section className="z-10 px-6 py-20 text-center">
        <h1 className="neon-404">404</h1>

        {/* Neon chiziq */}
        <svg
          className="mx-auto mt-[-40px] w-[280px] stroke-anim"
          viewBox="0 0 600 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 120 C120 10, 480 10, 590 120"
            stroke="rgba(255,0,93,0.6)"
            strokeWidth="6"
            fill="none"
          />
        </svg>

        <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-white tracking-wide glow-text">
          Sahifa topilmadi
        </h2>

        <p className="mt-3 max-w-md mx-auto text-gray-300 text-sm md:text-base">
          Kechirasiz, siz izlagan manzil mavjud emas yoki ko‘chirilgan.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-black font-medium shadow-lg transform transition hover:scale-105"
          >
            ← Bosh sahifaga qaytish
          </Link>
          <a
            href="#report"
            className="px-6 py-3 rounded-2xl border border-pink-400 text-pink-300 hover:bg-pink-400/20 transition"
          >
            Muammo haqida xabar berish
          </a>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
