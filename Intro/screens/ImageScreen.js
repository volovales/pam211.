import { Text, StyleSheet, View,ImageBackground, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const backgroundImage = require("../assets/fondo.jpg");

export default function ImageScreen({navigation}){
  const [showSplash, setShowSplash] = useState (true);
  useEffect(() => {
    const timer = setTimeout (()=>{
      setShowSplash(false);
    }, 3000);
    return ()=> clearTimeout(timer);
  }, []);
  if (showSplash){
    return(
      <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
      >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.title}>Cargado....</Text>
      </View>
      </ImageBackground>
    );
  }

  return(
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
      >

    <View style={styles.mainScreen}>
      <Text style={styles.mainText}>Bienvenido </Text>
    </View>
    </ImageBackground>
  );
}
  const {width,height} = Dimensions.get('window');
  const styles = StyleSheet.create({
    background:{
      width: width,
      height: height,
    },
    overlay:{
      flex:1,
//      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems:'center',
      padding:20,
    },
    title:{
    color: '#fff',
    fontSize:32,
    fontWeight:'bold',
    marginBlock:10,
    textAlign:'center',
    },
    mainScreen:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
     //backgroundColor: '#f2f2f2',
    },
    mainText:{
      fontSize:24,
      color:'#333',
    },
  })
