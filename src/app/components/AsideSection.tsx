import React from "react";

interface div_SectionProps {
  title: String;
  paragrafo: String;
}

export default function Div_Section({ title, paragrafo }: div_SectionProps) {
  return (
    <section className="bg-blue-500 text-white mb-20 grid grid-cols-2 gap-10">
      <div className="p-8">
        <h4 className="pb-4 text-2xl">{title}</h4>

        <p className="pb-4">{paragrafo}</p>
      </div>

      <img className="w-full h-full" src="../images/logo.png" alt="" />
    </section>
  );
}
