import React from "react";

type CountDownCartProps = {
  number: string; // allows '300+', '12k+' etc.
  label: string;
};

export default function CountDownCart({ number, label }: CountDownCartProps) {
  return (
    <div className="flex flex-col items-start px-6 py-8 border border-neutral-800  w-full h-full">
      <h2 className="text-3xl font-semibold text-white">
        {number}
        <span className="text-yellow-400">+</span>
      </h2>
      <p className="mt-2 text-gray-400">{label}</p>
    </div>
  );
}
