import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen'
import ContadorScreen from './ContadorScreen'
import TextInputAlertScreen from './TextInputAlertScreen'  

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');
    switch (screen) {
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return<BotonesScreen/>;
        case 'texto':
            return <TextInputAlertScreen/>;
        case'menu':
            default:
            return(
                    <View>
                        <Text> Menu de Practicas</Text>
                        <Button  onPress={()=>setScreen('contador')} title='Practica Contador'></Button>
                        <Button  onPress={()=>setScreen('botones')} title='Practica Botones'></Button>
                        <Button  onPress={()=>setScreen('texto')} title='Practica Text Input & Alert'></Button>
                    </View>
                
                )
            }
}

const styles = StyleSheet.create({})