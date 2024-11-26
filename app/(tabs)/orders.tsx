import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { foodItems } from "../../data/foodItems";

type SelectedItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  ingredients: { id: number; name: string; quantity: number }[];
  image: any;
};

const Orders = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [inventory, setInventory] = useState([
    { id: 1, name: "Carne", quantity: 10 },
    { id: 2, name: "Lechuga", quantity: 10 },
    { id: 3, name: "Tomate", quantity: 10 },
  ]);

  // Agregar un plato a la orden
  const handleAddToOrder = (item: SelectedItem) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Reducir la cantidad o eliminar un plato de la orden
  const handleRemoveFromOrder = (id: number) => {
    setSelectedItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Confirmar orden y actualizar inventario
  const confirmOrder = () => {
    const updatedInventory = [...inventory];
    selectedItems.forEach((item) => {
      item.ingredients.forEach((ingredient) => {
        const inventoryItem = updatedInventory.find(
          (inv) => inv.id === ingredient.id
        );
        if (inventoryItem) {
          inventoryItem.quantity -= ingredient.quantity * item.quantity;
        }
      });
    });
    setInventory(updatedInventory);
    setSelectedItems([]); // Vaciar el pedido
  };

  // Calcular el total de la orden
  const calculateTotal = () =>
    selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.foodDetails}>
              <Text style={styles.foodTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  handleAddToOrder({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: 1,
                    ingredients: item.ingredients,
                    image: item.image,
                  })
                }
              >
                <Text style={styles.addButtonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.orderSummary}>
        <Text style={styles.title}>Orden Actual</Text>
        <ScrollView>
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              <View key={item.id} style={styles.orderItem}>
                <Image source={item.image} style={styles.orderImage} />
                <View style={styles.orderDetails}>
                  <Text style={styles.foodTitle}>{item.title}</Text>
                  <View style={styles.quantityControl}>
                    <TouchableOpacity
                      onPress={() => handleRemoveFromOrder(item.id)}
                    >
                      <Text style={styles.controlButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        handleAddToOrder({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          quantity: 1,
                          ingredients: item.ingredients,
                          image: item.image,
                        })
                      }
                    >
                      <Text style={styles.controlButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.price}>
                    ${item.price * item.quantity}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noOrderText}>No hay platos en la orden.</Text>
          )}
        </ScrollView>
        <Text style={styles.total}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          style={[styles.addButton, { marginTop: 10 }]}
          onPress={confirmOrder}
          disabled={selectedItems.length === 0}
        >
          <Text style={styles.addButtonText}>Confirmar Orden</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  foodItem: {
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  foodDetails: {
    flex: 1,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: "#FFD700",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orderSummary: {
    marginTop: 20,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#FFFACD",
    borderRadius: 10,
    padding: 10,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  controlButton: {
    fontSize: 20,
    marginHorizontal: 10,
    color: "#007bff",
  },
  noOrderText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
