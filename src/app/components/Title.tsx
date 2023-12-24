import React from "react";
import logo from "../images/img_section_1/4.jpg";

interface titleProps {
  title: string;
}

export default function Title({ title }: titleProps) {
  return <h1 className="font-bold text-2xl mb-4">{title}</h1>;
}
