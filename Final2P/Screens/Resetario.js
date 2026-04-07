import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Platform
} from "react-native";
import React from "react";

const fondo = require("../assets/fondo.jpg");
const canelones = require("../assets/canelones.jpg");
const chavata_entrada = require("../assets/chavata_entrada.jpg");
const pasta_queso = require("../assets/pasta_queso.jpg");
const crema_champiñones_entradas = require("../assets/crema_champiñones_entradas.jpg");

export default function Resetrario() {
  
  const pedirProducto = (nombre) => {
    if (Platform.OS === "web") {
      alert(`Has pedido: ${nombre}`);
    } else {
      Alert.alert("Pedido realizado", `Has pedido: ${nombre}`, [
        { text: "Aceptar" },
      ]);
    }
  };

  const recetas = {
    Mis_Recetas: [
      {
        nombre: "Canelones",
        Descripcion: "Jugosa pasta que se deshace en la boca",
        Tiempo_de_preparacion: "1 Hr",
        img: canelones,
      },
      {
        nombre: "Chavata Entrada",
        Descripcion: "Pan con condimentos encima",
        Tiempo_de_preparacion: "10 Min",
        img: chavata_entrada,
      },
      {
        nombre: "Pasta con Queso",
        Descripcion: "Cremosa pasta con delicioso sabor a queso",
        Tiempo_de_preparacion: "35 Min",
        img: pasta_queso,
      },
      {
        nombre: "Crema de Champiñones",
        Descripcion: "Deliciosa crema de champiñones",
        Tiempo_de_preparacion: "3 Hr",
        img: crema_champiñones_entradas,
      },
    ],
  };

  return (
    <ImageBackground source={fondo} style={styles.bg} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        
        {recetas.Mis_Recetas.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.img} style={styles.img} />

            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.desc}>{item.Descripcion}</Text>
            <Text style={styles.time}>
              Tiempo: {item.Tiempo_de_preparacion}
            </Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => pedirProducto(item.nombre)}
            >
              <Text style={styles.btnText}>Pedir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    padding: 15,
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(173, 112, 112, 0.9)",
    width: "90%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    color: "#333",
  },
  time: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
