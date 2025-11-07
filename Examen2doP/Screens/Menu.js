import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import platillos from './platillos'
import { Button } from 'react-native-web';


export default function Menu() {
const [screen,setScreen ]= useState('menu'); 
  switch(screen) {
    case'platillos':
    return<platillos/>;
    case'Menu':
    default:
        return(
            <View>
                <Text> Menu del restaurante El gatini</Text>
                <Button onPress={()=>setScreen
                ('patillos')} title='Platillos de la casa'></Button>
                 <Button onPress={()=>setScreen
                ('patillos')} title='Platillos de la casa'></Button>
                 <Button onPress={()=>setScreen
                ('patillos')} title='Platillos de la casa'></Button>
            </View>
            )   
  }
}

const styles = StyleSheet.create({})