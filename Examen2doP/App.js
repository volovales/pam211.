import { StyleSheet, Text, View ,ImageBackground,Image,Dimensions } from 'react-native';
import  Menu from './Screens/Menu';
//const backgroundImage = require("../assets/fonde_restaurante.jpg")

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Sea bienbenido a El gatini</Text> 
    <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b4848ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
