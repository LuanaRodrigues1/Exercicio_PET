import React from "react";

interface sectionProps {
  style: string;
  imgSrc?: string;
  title: string;
  paragrafo: string;
  lista?: string[];
}

export default function Section({
  style,
  imgSrc,
  title,
  paragrafo,
  lista,
}: sectionProps) {
  return (
    <section className={style}>
      {imgSrc && <img className="w-full h-full" src={imgSrc} alt="" />}

      <div className="p-8">
        <h4 className="pb-4 text-2xl">{title}</h4>

        <p className="pb-4">{paragrafo}</p>

        <ul className="pb-4">
          {lista && lista.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
