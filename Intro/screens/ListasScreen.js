import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native';
import React from 'react';
export default function ListasScreen() {
  // FlatList
  const ejercicios = [
    { id: '1', nombre: 'Sentadilla', descripcion: 'Ejercicio para pierna' },
    { id: '2', nombre: 'Lagartijas', descripcion: 'Ejercicio para pecho' },
    { id: '3', nombre: 'Abdominales', descripcion: 'Ejercicio para abdomen' },
    { id: '4', nombre: 'Burpees', descripcion: 'Ejercicio completo' },
    { id: '5', nombre: 'Correr', descripcion: 'Ejercicio cardiovascular' },
  ];
  // SectionList
  const contactos = [
    { titulo: 'A', datos: ['Alejandro', 'Amalia', 'America', 'Amado'] },
    { titulo: 'B', datos: ['Baleria', 'Barca', 'Bambi', 'Baldro'] },
    { titulo: 'C', datos: ['Carlos', 'Camilo', 'Cecilia', 'Sergio'] },
    { titulo: 'D', datos: ['Dana', 'Daniel', 'Dororo', 'Dani'] },
    { titulo: 'E', datos: ['Elena', 'Eduardo', 'Esteban', 'Erika'] },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Ejercicios</Text>
      <FlatList
        data={ejercicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        )}
      />
      <Text style={styles.titulo}>Lista de Contactos</Text>
        <SectionList
            sections={contactos.map((c) => ({ title: c.titulo, data: c.datos }))}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
          <Text style={styles.contacto}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.seccion}>{title}</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#6666fdff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#30eef5ff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 18,
    fontWeight: '600',
  },
  descripcion: {
    fontSize: 14,
    color: '#9720e6ff',
  },
  seccion: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#1fe661ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  contacto: {
    fontSize: 16,
    paddingVertical: 4,
    paddingLeft: 15,
  },
});
          