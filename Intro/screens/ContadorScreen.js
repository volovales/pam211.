//1 Imports: Zona de Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';

//2 Main: Zona del Componente
export default function ContadorScreen() {
  const[contador, setContador] = useState(0);
  return ( 
    //style={styles.container}> en esta parte se pasa el objeto y la clase el objeto style la propiedad es{styles.container} 
    <View style={styles.container}>

      <Text style={styles.text}> Contador: </Text>
      <Text style={styles.text2}> {contador}</Text>

      <View style={styles.botonesContainer}>

      <Button color='blue' title='Agregar' onPress={() => setContador(contador + 1)}/>
      <Button color='gold' title='Quitar' onPress={() => setContador(contador - 1)}/>
      <Button color='red' title='Reiniciar' onPress={() => setContador(0)}/>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

//3 Styles: Zona de Estilos para el Componente
const styles = StyleSheet.create({
  container: {
    flex: 1,//contenedor y repartir expacions 
    backgroundColor: '#694a05ff',//color al fondo 
    alignItems: 'center',//start(izquierda),end(derecha)
    justifyContent: 'center',//start(arriba),end(abajo)
    
  },//para agregar una nueva clase es despues de este punto
  text:{
    color:'#290394ff',
    fontSize:30,//es una medida
    fontFamily:'Times New Roman',
    fontWeight: 'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  text2:{
    color:'#dfa11dff',
    fontSize:40,//es una medida
    fontFamily:'Courier',
    fontWeight: '400',
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
  botonesContainer:{
    marginTop:20,
    flexDirection:'row',
    gap:20,

  },

});