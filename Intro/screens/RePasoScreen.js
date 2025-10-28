import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Switch, Image, ImageBackground, Platform } from 'react-native';

const backgroundImage = require("../assets/repaso.jpg");
const logo = require("../assets/logo.jpg");

export default function RePasoScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };
  const registrar = () => {
    let errores = [];
    if (nombre.trim() === '') {
      errores.push('el nombre');
    } 
    if (correo.trim() === '') {
      errores.push('el correo');
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(correo)) {
        errores.push('un correo válido (con @ y dominio)');
      }
    }
    if (!aceptaTerminos) {
      errores.push('aceptar los términos y condiciones');
    }
    if (errores.length > 0) {
      const mensaje = `Por favor completa lo siguiente:\n- ${errores.join('\n- ')}`;
      mostrarAlerta('Campos incompletos', mensaje);
      return;
    }
    mostrarAlerta('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.splashText}>Cargando...</Text>
      </View>
    );
  }
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
          />
        </View>

        <Button title="Registrarse" color="#2196F3" onPress={registrar} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
  },
  splashText: {
    color: 'white',
    fontSize: 22,
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    margin: 25,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 16,
  },
});