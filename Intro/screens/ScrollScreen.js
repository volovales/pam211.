import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function ScrollScreen(){
    return (
      <View style = {styles.container}>
        <ScrollView  style={styles.scrollArea} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
        <Text style={styles.title}>En la sala de un hospital
        A las 9:43 nació Simon
        Es el verano del '56
        El orgullo de don Andrés, por ser varón</Text>
        <Text style={styles.item}>Fue criado como los demas
        Con mano dura, con severidad, nunca opinó
        "Cuando crezcas vas a estudiar
        La misma vaina que tu papá, óyelo bien
        Tendrás que ser
        Un gran varón"</Text>
        <Text style={styles.textRed}>Al extranjero se fue Simón
        Lejos de casa, se le olvidó aquel sermón
        Cambió la forma de caminar
        Usaba falda, lápiz labial, y un carterón</Text>
        <Text style={styles.textRed}>Cuenta la gente que un dia el papá
        Fue a visitarlo sin avisar, vaya que error
        Y una mujer le habló al pasar
        Le dijo "hola, qué tal papá, ¿cómo te va?
        No me conoces yo soy Simón
        Simón, tu hijo, el gran varón"</Text>
        <Text style={styles.item}>(No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        (No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        (No se p uede corregir a la naturaleza)</Text>
        <Text style={styles.item}>(No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        Se dejó llevar por lo que dice la gente
        Su padre jamás le habló, lo abandono para siempre
        (No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        No te quejes Andrés, no te quejes por nada
        Si del cielo te caen limones aprende a hacer limonada</Text>
        <Text style={styles.item}>(No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        Y mientras pasan lo años, el viejo cediendo un poco
        Simón ya ni le escribía, Andrés estaba furioso
        (No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        Por fin hubo noticias de dónde su hijo estaba
        Andrés nunca olvidó el día de esa triste llamada</Text>
        <Text style={styles.item}>Alelelelele
        Alelelele
        Alelelelele-eh-eh
        Alelelelele
        Alelelele
        Alelelelele</Text>
        <Text>En la sala de un hospital
        De una extraña enfermedad, murió Simón
        Es el verano del '86
        Al enfermo de la cama 10 nadie lloró
        Simón, Simón
        Simón</Text>
        <Text>(No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        Hay que tener compasión, basta ya de moraleja
        En que esté libre de pecado, que tire la primera piedra
        (No se puede corregir a la naturaleza
        Palo que nace doblado, jamás su tronco endereza)
        El que nunca perdona tiene destino cierto
        De vivir amargos recuerdos en su propio infierno
      (No se puede corregir a la naturaleza
      Palo que nace doblado, jamás su tronco endereza)</Text>
        <Text>Alelelelele
        Alelelele
        Alelelelele-eh-eh
        Alelelelele
        Alelelele</Text>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2b7dcaff',
  },
  scrollArea:{
    flex:1,
  },
  scrollContent:{
    alignItems:'center',
    paddingVertical:20,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#9e0c0cff',
    textAlign:'center',
    marginBlock:20,
  },
  item:{
    backgroundColor:'#4034dfff',
    color:'#36e0f7ff',
    padding: 12,
    marginVertical:8,
    borderRadius:10,
    textAlign: 'center',
  },
  subtitleRed:{
    fontSize:22,
    fontWeight:'bold',
    color:'#d88686ff',
    textAlign:'center',
    backgroundColor:'#eb4040ff',
    borderRadius:10,
    marginVertical:12,
    paddingVertical:12,
    paddingHorizontal:10,
    width:'95%',
    alignSelf:'center',
  },
  texte:{
    fontSize:16,
    color:'#4dcff0ff',
    lineHeight:24,
    textAlign:'justify',
    marginBottom:15,
    padding:10,
  },
  textRed:{
    fontSize:16,
    color:'#bd40b6ff',
    lineHeight:24,
    textAlign:'justify',
    marginBottom:15,
    padding:10,
    backgroundColor:'#fc69d0ff',
    borderRadius:10,
  },
})