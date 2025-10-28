import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen'
import ContadorScreen from './ContadorScreen'
import TextInpuScreen from './TextInpuScreen'
import ImageScreen from './ImageScreen'
import ActivityScreen from './ActivityScreen'
import ScrollScreen from  './ScrollScreen'
import RePasoScreen from  './RePasoScreen'
import ListasScreen from './ListasScreen'

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
    return <ContadorScreen />;

    case 'botones':
    return <BotonesScreen />;

    case 'texto':
    return <TextInpuScreen />; 

    case 'ruedita':
    return <ActivityScreen />;

    case 'imagen':
    return <ImageScreen />;

    case 'scrol':
    return <ScrollScreen/>;
    
    case 'repaso':
    return <RePasoScreen/>;

    case 'lista':
      return <ListasScreen/>;

    case 'menu':
      default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>
          <Button onPress={() =>setScreen('contador')} title='Práctica Contador' ></Button>
          <Button onPress={() =>setScreen('botones')} title='Práctica Botones' ></Button>
          <Button onPress={() =>setScreen('texto')} title='Práctica Texto' ></Button>
          <Button onPress={() =>setScreen('ruedita')} title='Práctica Ruedita' ></Button>
          <Button onPress={() =>setScreen('imagen')} title='Práctica Imagen' ></Button>
          <Button onPress={() =>setScreen('scrol')} title='Práctica scrol' ></Button>
          <Button onPress={() =>setScreen('repaso')} title='RePaso1' ></Button>
          <Button onPress={() =>setScreen('lista')} title='lista' ></Button>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
