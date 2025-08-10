import React from "react";
import { Link } from "react-router-dom";
import "../css/page2.css";

const Page2 = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative">
      
      {/* Yulduzlar foni */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="shooting-star"></div>

      <section className="z-10 text-center px-4">
        <h1 className="galaxy-404">404</h1>
        <p className="mt-4 text-lg text-gray-300">
          The galaxy you are looking for does not exist 🚀
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          🌌 return to home page
        </Link>
      </section>
    </main>
  );
};

export default Page2;
