import { Text, StyleSheet, View,Button,Modal} from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen ()  {

    const[modalVisible,setModalVisible] = useState(false);
    return (
      <View style={styles.container}>
        <Button title='Mostar modal' onPress={()=> setModalVisible(true)} color='purple'></Button>
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(!modalVisible)}>
            <View style={styles.modalContainer}>
            <View style={styles.modalContent}> 
            <Text style={styles.textModal}>
                soy un modal
            </Text>
            <Button title='Oculatr Modal' onPress={()=> setModalVisible(false)} color='purple'> </Button>
            </View>

            </View>
        </Modal>
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#8a1c1cff',
    },
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f10e0eff'
    },
modalContent:{
    backgroundColor:'#a84a4aff',
    padding:25,
    borderRadius:15,
    alignItems:'center',
},
textModal:{
    color:'#000000ff',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:15,
},
})