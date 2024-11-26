// src/screens/SuppliersScreen.tsx
import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { suppliers as initialSuppliers } from "../../data/suppliers";

const SuppliersScreen = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [newSupplier, setNewSupplier] = useState({ name: "", product: "", price: "", unit: "", contact: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAdd = () => {
    if (newSupplier.name && newSupplier.product && newSupplier.price && newSupplier.unit && newSupplier.contact) {
      const newId = suppliers.length ? suppliers[suppliers.length - 1].id + 1 : 1;
      setSuppliers([...suppliers, { ...newSupplier, id: newId }]);
      setNewSupplier({ name: "", product: "", price: "", unit: "", contact: "" });
      setIsFormVisible(false); // Ocultar el formulario tras agregar el proveedor
    }
  };

  const handleEdit = (id) => {
    const updatedSuppliers = suppliers.map((supplier) =>
      supplier.id === id
        ? { ...supplier, name: "Editado", product: "Nuevo Producto", price: "9999", unit: "unidad", contact: "nuevo@correo.com" }
        : supplier
    );
    setSuppliers(updatedSuppliers);
  };

  const handleRemove = (id) => {
    const filteredSuppliers = suppliers.filter((supplier) => supplier.id !== id);
    setSuppliers(filteredSuppliers);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={suppliers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>
              Producto: {item.product} - Precio: ${item.price}/{item.unit}
            </Text>
            <Text style={styles.contact}>Contacto: {item.contact}</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Editar" color="#FFDD44" onPress={() => handleEdit(item.id)} />
              <Button title="Eliminar" color="#FF6666" onPress={() => handleRemove(item.id)} />
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setIsFormVisible((prev) => !prev)}
      >
        <Text style={styles.toggleButtonText}>
          {isFormVisible ? "Cerrar Formulario" : "Agregar Proveedor"}
        </Text>
      </TouchableOpacity>
      {isFormVisible && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del proveedor"
            value={newSupplier.name}
            onChangeText={(text) => setNewSupplier((prev) => ({ ...prev, name: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Producto"
            value={newSupplier.product}
            onChangeText={(text) => setNewSupplier((prev) => ({ ...prev, product: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Precio"
            keyboardType="numeric"
            value={newSupplier.price}
            onChangeText={(text) => setNewSupplier((prev) => ({ ...prev, price: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Unidad (kg, litro, etc.)"
            value={newSupplier.unit}
            onChangeText={(text) => setNewSupplier((prev) => ({ ...prev, unit: text }))}
          />
          <TextInput
            style={styles.input}
            placeholder="Contacto"
            value={newSupplier.contact}
            onChangeText={(text) => setNewSupplier((prev) => ({ ...prev, contact: text }))}
          />
          <Button title="Agregar Proveedor" color="#FFDD44" onPress={handleAdd} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8E1", // Fondo amarillo claro
  },
  card: {
    backgroundColor: "#FFFBE6",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  detail: {
    fontSize: 16,
    color: "#555",
    marginVertical: 5,
  },
  contact: {
    fontSize: 14,
    color: "#777",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  toggleButton: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#FFDD44",
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
    backgroundColor: "#FFFBE6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    padding: 8,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
});

export default SuppliersScreen;

