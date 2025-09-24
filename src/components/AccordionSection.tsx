// src/components/AccordionSection.tsx
import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string[];
}

const items: AccordionItem[] = [
  {
    title: "Especificaciones",
    content: [
      "24 Puertos Gigabit 10/100/1000",
      "04 puertos 1G para fibra SFP",
      "Capacidad de switching: 56 Gbps",
      "PoE+ hasta 370W (en modelos PoE)",
    ],
  },
  {
    title: "Protocolos soportados",
    content: [
      "802.1x autenticación",
      "Spanning Tree Protocol (STP, RSTP, MST)",
      "QoS avanzado con priorización de tráfico",
    ],
  },
  {
    title: "Normas",
    content: ["IEEE 802.3", "IEEE 802.3u", "IEEE 802.3ab", "IEEE 802.3z"],
  },
  {
    title: "Certificaciones",
    content: ["CE", "FCC", "UL", "RoHS"],
  },
];

const AccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white mt-8 rounded-lg shadow-md">
      {items.map((item, idx) => (
        <div key={idx} className="border-b">
          <button
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-700 hover:bg-gray-50"
          >
            {item.title}
            <i
              className={`fas fa-chevron-down transition-transform ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-sm text-gray-600">
              <ul className="space-y-2 list-disc pl-5">
                {item.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default AccordionSection;
