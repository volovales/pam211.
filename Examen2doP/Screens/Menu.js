import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import platillos from './platillos'
import postres from  './postres'
import Entradas from './Entradas'
import { Button } from 'react-native-web';

export default function Menu() {
const [screen,setScreen ]= useState('menu'); 
  switch(screen) {
    case'platillos':
    return<platillos/>;
    case'Entradas':
    return<Entradas/>;
    case'postres':
    return<postres/>;
    case'bebidas':
    return<bedidas/>;
    case'Menu':
    default:
        return(
            <View>
                <Text> Menu del restaurante El gatini</Text>
                <Button onPress={()=>setScreen
                ('platillos')} title='Platillos de la casa'></Button>
                 <Button onPress={()=>setScreen
                ('Entradas')} title='Entradas de la casa'></Button>
                 <Button onPress={()=>setScreen
                ('postres')} title='Postres de la casa'></Button>
                <Button onPress={()=>setScreen
                ('bebidas')} title='Bebidas de la casa'></Button>
            </View>
            )   
  }
}

const styles = StyleSheet.create({})