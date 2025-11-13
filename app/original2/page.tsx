"use client";

import { useState } from "react";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function page() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Ramen Tradicional de Tokio",
      description:
        "Delicioso ramen con caldo a base de soya, fideos artesanales y cerdo chashu.",
      image:
        "https://images.unsplash.com/photo-1604908176997-27b4f58f8b4f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Sushi Edo",
      description:
        "Sushi estilo Edo con arroz sazonado y pescado fresco del mercado Tsukiji.",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=800&q=60",
    },
  ]);

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        🍣 Recetas de Tokio
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
