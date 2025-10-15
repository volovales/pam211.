import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
export default function ActivityScreen() 
{
  const [cargando, setCargando] = useState(false);
  const carga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      Alert.alert('Carga completa', 'La carga ha finalizado correctamente.');
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Próximamente.....</Text>

      {cargando ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Button color="red" title="Presione para iniciar" onPress={carga} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e12e7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#ffffffff',
    fontSize: 30,
    marginBottom: 20,
  },
});
