"use client";

import { useState } from "react";

interface Receta {
  id: number;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  imagen: string;
}

export default function page() {
  const [recetas] = useState<Receta[]>([
    {
      id: 1,
      nombre: "Tacos al Pastor",
      descripcion:
        "Deliciosos tacos de cerdo marinados con achiote y piña, típicos de la Ciudad de México.",
      ingredientes: [
        "Carne de cerdo",
        "Achiote",
        "Piña",
        "Cebolla",
        "Cilantro",
        "Tortillas de maíz",
      ],
      imagen: "https://cdn.pixabay.com/photo/2017/03/13/14/40/tacos-2148041_1280.jpg",
    },
    {
      id: 2,
      nombre: "Guacamole",
      descripcion:
        "Clásico acompañamiento mexicano hecho a base de aguacate, limón, y chile.",
      ingredientes: ["Aguacate", "Cilantro", "Cebolla", "Chile", "Limón", "Sal"],
      imagen: "https://cdn.pixabay.com/photo/2017/02/01/10/33/avocado-2037091_1280.jpg",
    },
    {
      id: 3,
      nombre: "Chiles en Nogada",
      descripcion:
        "Platillo poblano que representa los colores de la bandera mexicana.",
      ingredientes: [
        "Chile poblano",
        "Carne molida",
        "Nuez",
        "Granada",
        "Perejil",
        "Crema",
      ],
      imagen: "https://cdn.pixabay.com/photo/2016/10/27/05/14/food-1779609_1280.jpg",
    },
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        🇲🇽 Recetas Tradicionales de México
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {recetas.map((receta) => (
          <div
            key={receta.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={receta.imagen}
              alt={receta.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-red-700">
                {receta.nombre}
              </h2>
              <p className="text-gray-700 mt-2">{receta.descripcion}</p>
              <h3 className="mt-3 font-semibold text-green-800">Ingredientes:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {receta.ingredientes.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
