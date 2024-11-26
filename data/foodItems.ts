type Ingredient = {
    id: number;
    name: string;
    quantity: number;
  };
  
  type FoodItem = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: any; 
    ingredients: Ingredient[];
  };
  
  
  export const foodItems = [
      {
        id: 1,
        title: "Hamburguesa 1",
        description: "Hamburguesa fresca 1",
        price: 20000,
        image: require("../assets/images/foods/burger-1.jpg"),
        ingredients: [
          { id: 1, name: "Carne", quantity: 1 },
          { id: 2, name: "Lechuga", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 1 },
          { id: 4, name: "Pan", quantity: 2 },
        ],
      },
      {
        id: 2,
        title: "Hamburguesa 2",
        description: "Hamburguesa fresca 2",
        price: 20000,
        image: require("../assets/images/foods/burger-2.jpg"),
        ingredients: [
          { id: 1, name: "Carne", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Pan", quantity: 2 },
        ],
      },
      {
        id: 3,
        title: "Hamburguesa 3",
        description: "Hamburguesa fresca 3",
        price: 20000,
        image: require("../assets/images/foods/burger-3.jpg"),
        ingredients: [
          { id: 1, name: "Carne", quantity: 1 },
          { id: 2, name: "Lechuga", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 1 },
          { id: 4, name: "Pan", quantity: 2 },
        ],
      },
      {
        id: 4,
        title: "Hamburguesa 4",
        description: "Hamburguesa fresca 4",
        price: 20000,
        image: require("../assets/images/foods/burger-4.jpg"),
        ingredients: [
          { id: 1, name: "Carne", quantity: 1 },
          { id: 2, name: "Lechuga", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 1 },
          { id: 4, name: "Pan", quantity: 2 },
        ],
      },
      {
        id: 5,
        title: "Hamburguesa 5",
        description: "Hamburguesa fresca 5",
        price: 20000,
        image: require("../assets/images/foods/burger-5.jpg"),
        ingredients: [
          { id: 1, name: "Carne", quantity: 1 },
          { id: 2, name: "Lechuga", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 1 },
          { id: 4, name: "Pan", quantity: 2 },
        ],
      },
      {
        id: 6,
        title: "Hamburguesa 6",
        description: "Hamburguesa fresca 6",
        price: 20000,
        image: require("../assets/images/foods/burger-6.jpg"),
        ingredients: [
          { id: 1, name: "Carne", quantity: 1 },
          { id: 2, name: "Lechuga", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 1 },
          { id: 4, name: "Pan", quantity: 2 },
        ],
      },
      {
        id: 7,
        title: "Pizza 1",
        description: "Pizza fresca 1",
        price: 25000,
        image: require("../assets/images/foods/pizza-1.jpg"),
        ingredients: [
          { id: 1, name: "Masa", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 2 },
        ],
      },
      {
        id: 8,
        title: "Pizza 2",
        description: "Pizza fresca 2",
        price: 25000,
        image: require("../assets/images/foods/pizza-2.jpg"),
        ingredients: [
          { id: 1, name: "Masa", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 2 },
        ],
      },
      {
        id: 9,
        title: "Pizza 3",
        description: "Pizza fresca 3",
        price: 25000,
        image: require("../assets/images/foods/pizza-3.jpg"),
        ingredients: [
          { id: 1, name: "Masa", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 2 },
        ],
      },
      {
        id: 10,
        title: "Pizza 4",
        description: "Pizza fresca 4",
        price: 25000,
        image: require("../assets/images/foods/pizza-4.jpg"),
        ingredients: [
          { id: 1, name: "Masa", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 2 },
        ],
      },
      {
        id: 11,
        title: "Pizza 5",
        description: "Pizza fresca 5",
        price: 25000,
        image: require("../assets/images/foods/pizza-5.jpg"),
        ingredients: [
          { id: 1, name: "Masa", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 2 },
        ],
      },
      {
        id: 12,
        title: "Pizza 6",
        description: "Pizza fresca 6",
        price: 25000,
        image: require("../assets/images/foods/pizza-6.jpg"),
        ingredients: [
          { id: 1, name: "Masa", quantity: 1 },
          { id: 2, name: "Queso", quantity: 1 },
          { id: 3, name: "Tomate", quantity: 2 },
        ],
      },
      {
        id: 13,
        title: "Tacos 1",
        description: "Tacos frescos 1",
        price: 20000,
        image: require("../assets/images/foods/tacos-1.jpg"),
        ingredients: [
          { id: 1, name: "Tortilla", quantity: 2 },
          { id: 2, name: "Carne", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Cilantro", quantity: 1 },
        ],
      },
      {
        id: 14,
        title: "Tacos 2",
        description: "Tacos frescos 2",
        price: 20000,
        image: require("../assets/images/foods/tacos-2.jpg"),
        ingredients: [
          { id: 1, name: "Tortilla", quantity: 2 },
          { id: 2, name: "Carne", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Cilantro", quantity: 1 },
        ],
      },
      {
        id: 15,
        title: "Tacos 3",
        description: "Tacos frescos 3",
        price: 20000,
        image: require("../assets/images/foods/tacos-3.jpg"),
        ingredients: [
          { id: 1, name: "Tortilla", quantity: 2 },
          { id: 2, name: "Carne", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Cilantro", quantity: 1 },
        ],
      },
      {
        id: 16,
        title: "Tacos 4",
        description: "Tacos frescos 4",
        price: 20000,
        image: require("../assets/images/foods/tacos-4.jpg"),
        ingredients: [
          { id: 1, name: "Tortilla", quantity: 2 },
          { id: 2, name: "Carne", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Cilantro", quantity: 1 },
        ],
      },
      {
        id: 17,
        title: "Tacos 5",
        description: "Tacos frescos 5",
        price: 20000,
        image: require("../assets/images/foods/tacos-5.jpg"),
        ingredients: [
          { id: 1, name: "Tortilla", quantity: 2 },
          { id: 2, name: "Carne", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Cilantro", quantity: 1 },
        ],
      },
      {
        id: 18,
        title: "Tacos 6",
        description: "Tacos frescos 6",
        price: 20000,
        image: require("../assets/images/foods/tacos-6.jpg"),
        ingredients: [
          { id: 1, name: "Tortilla", quantity: 2 },
          { id: 2, name: "Carne", quantity: 1 },
          { id: 3, name: "Cebolla", quantity: 1 },
          { id: 4, name: "Cilantro", quantity: 1 },
        ],
      },
    ];