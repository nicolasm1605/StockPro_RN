import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface InventoryCardProps {
  name: string;
  quantity: number;
  unit: string;
  image: any;
}

const InventoryCard: React.FC<InventoryCardProps> = ({ name, quantity, unit, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>{quantity} {unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
});

export default InventoryCard;
