import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'

export default function TextInpuScreen() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [numero, setNumero] = useState('');

  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('ERROR: por favor ingresa tu nombre');
      } else {
        Alert.alert('ERROR: por favor ingresa tu nombre');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert('HOLA ' + nombre);
      } else {
        Alert.alert('HOLA ' + nombre);
      }
    }
  }; 
  const manejarNumero = (texto) => {
    const soloNumeros = texto.replace(/[^0-9]/g, '');
    setNumero(soloNumeros);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TextScreen</Text>
      <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu nombre'
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}
      />
      <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu contraseña'
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry={true}
        maxLength={20}
      />
      <TextInput
        style={[styles.recuadro, { height: 100, textAlignVertical: 'top' }]}
        placeholder='Escribe tu descripción (máx 4 líneas)'
        value={descripcion}
        onChangeText={setDescripcion}
        multiline={true}
        maxLength={200}
      />
      <TextInput
        style={styles.recuadro}
        placeholder='Escribe solo números'
        value={numero}
        onChangeText={manejarNumero}
        keyboardType='numeric'
        maxLength={10}
      />
      <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recuadro: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
});
