import React from "react";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white font-semibold flex justify-between items-center px-5 py-3 h-20 font-mono">
      <div>
        <img className="h-12 w-30" src="logo.png" alt="logo" />
      </div>

      <nav>
        <a
          href="#section_1"
          className="mr-4 transition duration-300 hover:underline"
        >
          Novidades
        </a>
        <a
          href="#section_2"
          className="transition duration-300 hover:underline"
        >
          Recomendações
        </a>
      </nav>
    </header>
  );
}
