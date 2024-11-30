import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const [username, setUsername] = useState(''); // Nombre de usuario
  const [password, setPassword] = useState(''); // Contraseña
  const [error, setError] = useState(''); // Mensaje de error
  const [role, setRole] = useState(null); // 'admin' o 'waiter'

  // Credenciales predefinidas (puedes modificarlas para más roles o seguridad)
  const credentials = {
    admin: { username: 'admin', password: 'admin123' },
    waiter: { username: 'mesero', password: 'mesero123' },
  };

  const handleLogin = (roleType) => {
    // Verificación de credenciales para admin o mesero basado en el roleType
    if (
      roleType === 'admin' &&
      username === credentials.admin.username && password === credentials.admin.password
    ) {
      setRole('admin');
      setIsAuthenticated(true); // Cambiar el estado a autenticado
      Alert.alert('Bienvenido Admin', 'Has iniciado sesión correctamente', [
        {
          text: 'OK',
          onPress: () => {
            // Redirigir a la pantalla principal
          },
        },
      ]);
    } else if (
      roleType === 'waiter' &&
      username === credentials.waiter.username && password === credentials.waiter.password
    ) {
      setRole('waiter');
      setIsAuthenticated(true); // Cambiar el estado a autenticado
      Alert.alert('Bienvenido Mesero', 'Has iniciado sesión correctamente', [
        {
          text: 'OK',
          onPress: () => {
            // Redirigir a la pantalla principal
          },
        },
      ]);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setRole(null);
  };

  if (!isAuthenticated) {
    // Si no está autenticado, mostrar el formulario de login
    return (
      <View style={styles.container}>
        <Text style={styles.title}>INICIAR SESIÓN</Text>
        
        {/* Formulario de login */}
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar sesión como Admin"
            onPress={() => handleLogin('admin')}
            color="#FFC107"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar sesión como Mesero"
            onPress={() => handleLogin('waiter')}
            color="#FFC107"
          />
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
          initialParams={{ role, handleLogout }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9E5', // Fondo amarillo suave
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFC107', // Título en amarillo
    textTransform: 'uppercase', // Título en mayúsculas
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#FFC107', // Bordes en amarillo
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});
