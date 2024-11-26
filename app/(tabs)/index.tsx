import React from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/StockPro.png')} style={styles.logo} />
      <Text style={styles.title}>Gestión de Restaurante</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Inventario"
          color="#FFC107"
          onPress={() => router.push('/inventory')}
        />
        <Button
          title="Ir a Proveedores"
          color="#FFC107"
          onPress={() => router.push('/suppliers')}
        />
        <Button
          title="Ir a Pedidos"
          color="#FFC107"
          onPress={() => router.push('/orders')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5', // Fondo amarillo claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});
