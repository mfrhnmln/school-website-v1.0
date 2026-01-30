import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DataExtracurricular from "../../Data/DataExtracurricular";

const ComponentsExtracurricular = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language; // "id" | "en"

  return (
    <div className="flex flex-col md:flex-row w-full h-full max-w-7xl justify-center items-center px-5 md:px-10 lg:px-20 gap-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {DataExtracurricular.items.map((item) => (
          <Link
            to={`/ekstrakurikuler/${item.slug}`}
            key={item.id}
            className="bg-[var(--background)] w-full rounded-2xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition flex flex-col"
          >
            {/* Gambar */}
            <div className="w-full h-55 bg-[var(--background)]">
              <img
                src={item.image}
                alt={item.name[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Ekskul */}
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <h1 className="font-semibold text-paragraph text-lg">
                {item.name[lang]}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentsExtracurricular;
