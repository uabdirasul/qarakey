"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Ne ushın taskbar'da QQ bolıp kórinbeydi?",
      answer:
        "Sebebi, Qaraqalpaqstannıń LOCALENAME hám LOCALEID'si joq, sonlıqtan ENG hám РУС saylanǵan."
    }
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-semibold mb-8 text-white bg-gray-500 inline-block rounded-lg p-2 leading-8">
        F.A.Q. — Tez soralatuǵın sorawlar
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-black rounded-lg overflow-hidden shadow-lg"
          >
            <div
              onClick={() => toggleOpen(index)}
              className="bg-black px-6 py-4 cursor-pointer flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-linear bg-white/20 bg-gradient-to-tr from-gray-800/50 to-gray-800/50 border border-white/30 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="p-6 text-white text-left">{faq.answer}</p>
            </div>
          </div>
        ))}
        <p className="text-black text-2xl pt-2">...</p>
      </div>
    </div>
  );
};

export default FAQ;
