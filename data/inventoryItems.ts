// src/data/inventoryItems.ts

import { useState } from "react";

// Definimos la interfaz para los ingredientes
export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  image: any; // 'any' es adecuado para las imágenes importadas, pero podrías usar un tipo más preciso si prefieres.
}

// El hook useInventory ahora maneja un array de ingredientes (con el tipo Ingredient[])
export const useInventory = () => {
  const [inventoryItems, setInventoryItems] = useState<Ingredient[]>([
    {
      id: 1,
      name: "Carne",
      quantity: 100,
      unit: "kg",
      image: require("../assets/images/ingredients/carne.jpg"),
    },
    {
      id: 2,
      name: "Lechuga",
      quantity: 50,
      unit: "unidades",
      image: require("../assets/images/ingredients/lechuga.jpg"),
    },
    {
      id: 3,
      name: "Tomate",
      quantity: 30,
      unit: "unidades",
      image: require("../assets/images/ingredients/tomate.jpg"),
    },
    {
      id: 4,
      name: "Pan",
      quantity: 100,
      unit: "unidades",
      image: require("../assets/images/ingredients/pan-hamburguesa.jpg"),
    },
    {
      id: 5,
      name: "Queso",
      quantity: 20,
      unit: "kg",
      image: require("../assets/images/ingredients/queso.jpg"),
    },
    {
      id: 6,
      name: "Salsa de tomate",
      quantity: 10,
      unit: "litros",
      image: require("../assets/images/ingredients/salsa-tomate.jpg"),
    },
    {
      id: 7,
      name: "Cebolla",
      quantity: 20,
      unit: "unidades",
      image: require("../assets/images/ingredients/cebolla.jpg"),
    },
    {
      id: 8,
      name: "Masa para pizza",
      quantity: 40,
      unit: "kg",
      image: require("../assets/images/ingredients/masa-pizza.jpg"),
    },
    {
      id: 9,
      name: "Tortillas",
      quantity: 30,
      unit: "unidades",
      image: require("../assets/images/ingredients/tortillas.jpg"),
    },
  ]);

  // Función para agregar un ingrediente
  const addIngredient = (ingredient: Ingredient) => {
    const newIngredient = { id: Date.now(), ...ingredient };
    setInventoryItems((prev) => [...prev, newIngredient]);
  };

  // Función para editar un ingrediente existente
  const editIngredient = (id: number, updatedIngredient: Ingredient) => {
    setInventoryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedIngredient } : item))
    );
  };

  // Función para eliminar un ingrediente
  const removeIngredient = (id: number) => {
    setInventoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Función para usar un ingrediente (restando la cantidad disponible)
  const useIngredient = (id: number, amount: number) => {
    setInventoryItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - amount, 0) } : item
      )
    );
  };

  // Retornamos los valores que se usan fuera del hook
  return {
    inventoryItems,
    addIngredient,
    editIngredient,
    removeIngredient,
    useIngredient,
  };
};
