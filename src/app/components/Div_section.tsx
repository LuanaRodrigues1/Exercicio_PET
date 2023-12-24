import React from "react";

interface div_SectionProps {
  title: string;
  paragrafo: string;
  imgSrc: string;
}

export default function Div_Section({
  imgSrc,
  title,
  paragrafo,
}: div_SectionProps) {
  return (
    <section className="bg-blue-500 text-white mb-20 grid grid-cols-2 gap-10">
      <div className="p-8">
        <h4 className="pb-4 text-2xl">{title}</h4>

        <p className="pb-4">{paragrafo}</p>
      </div>

      <img className="w-50 h-full" src={imgSrc} alt="" />
    </section>
  );
}
