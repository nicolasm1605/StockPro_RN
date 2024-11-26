// src/screens/InventoryScreen.tsx

import React, { useState } from "react";
import { View, FlatList, Button, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import InventoryCard from "../../components/InventoryCard";
import { useInventory } from "../../data/inventoryItems";

const InventoryScreen = () => {
  const { inventoryItems, addIngredient, editIngredient, removeIngredient, useIngredient } = useInventory();
  const [newIngredient, setNewIngredient] = useState({ name: "", quantity: 0, unit: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAdd = () => {
    if (newIngredient.name && newIngredient.quantity && newIngredient.unit) {
      addIngredient(newIngredient);
      setNewIngredient({ name: "", quantity: 0, unit: "" });
      setIsFormVisible(false); // Ocultar el formulario después de agregar
    }
  };

  const handleEdit = (id: number) => {
    const updatedIngredient = { name: "Nuevo Nombre", quantity: 15, unit: "kg" };
    editIngredient(id, updatedIngredient);
  };

  const handleRemove = (id: number) => {
    removeIngredient(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={inventoryItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <InventoryCard
              name={item.name}
              quantity={item.quantity}
              unit={item.unit}
              image={item.image}
            />
            <View style={styles.buttonsContainer}>
              <Button title="Editar" color="#FFCC00" onPress={() => handleEdit(item.id)} />
              <Button title="Eliminar" color="#FF6666" onPress={() => handleRemove(item.id)} />
              <Button title="Usar 1 unidad" color="#66CC66" onPress={() => useIngredient(item.id, 1)} />
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setIsFormVisible((prev) => !prev)}
      >
        <Text style={styles.toggleButtonText}>
          {isFormVisible ? "Cerrar Formulario" : "Agregar Ingrediente"}
        </Text>
      </TouchableOpacity>
      {isFormVisible && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del ingrediente"
            value={newIngredient.name}
            onChangeText={(text) => setNewIngredient((prev) => ({ ...prev, name: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Cantidad"
            keyboardType="numeric"
            value={newIngredient.quantity.toString()}
            onChangeText={(text) => setNewIngredient((prev) => ({ ...prev, quantity: parseInt(text) || 0 }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Unidad (kg, unidades, etc.)"
            value={newIngredient.unit}
            onChangeText={(text) => setNewIngredient((prev) => ({ ...prev, unit: text }))}
          />
          <Button title="Agregar Ingrediente" color="#FFCC00" onPress={handleAdd} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF4E6",
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toggleButton: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#FFCC00",
    borderRadius: 10,
    alignItems: "center",
  },
  toggleButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  form: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    padding: 8,
    fontSize: 16,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
});

export default InventoryScreen;
