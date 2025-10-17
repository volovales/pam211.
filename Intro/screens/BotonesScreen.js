import React, {use, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';

export default function BotonesScreen(){
  const [Prendido, setPrendido] = useState(false);

  const backgroundColor = Prendido ? 'white' : 'black';
  const textColor = Prendido ? 'black' : 'white';

  return(
    <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.texto, {color: textColor}]}>Estado: {Prendido ? 'Prendido' : 'Apagado'}</Text>

        <TouchableOpacity
          style={styles.botonEncender}
          onPress={() => setPrendido(true)}>
          <Text style={styles.textoBoton}>Encender</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.botonApagar}
          onPress={() => setPrendido(false)}>

          <Text style={styles.textoBoton}>Apagar</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, {color: textColor}]}>Control Switch:</Text>
          <Switch value={Prendido}  onValueChange={setPrendido}> </Switch>
        </View>
    </View>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(209, 73%, 88%, 1.00)',
  },
  texto : {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botonEncender: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  botonApagar: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
})