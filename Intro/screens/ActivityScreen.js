import { useState } from 'react';
import { Text, View, Button, StyleSheet, ActivityIndicator } from 'react-native';
export default function ActivityScreen() 
{
  const [cargando, setCargando] = useState(false);
  const carga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      alert('Carga completa');
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Presione para iniciar la simulación de carga</Text>
      {cargando ? (<ActivityIndicator size="large" color="blue" />):(<Button color="red" title="Presione para iniciar" onPress={carga} />)}
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
    color: '#e73a3aff',
    fontSize: 30,
    marginBottom: 20,
  },
});
