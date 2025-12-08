import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";

// --- Importación de imágenes locales (todas existen en tu carpeta assets) ---

// Fondo
const fondo = require("../assets/fondo.jpg");

// Entradas
const chavata_entrada = require("../assets/chavata_entrada.jpg");
const crema_champinones_entradas = require("../assets/crema_champiñones_entradas.jpg"); // corregido (sin ñ)

// Platillo Fuerte
const pasta_queso = require("../assets/pasta_queso.jpg");
const pasta_tomate = require("../assets/pasta_tomatr.jpg"); // corregido (archivo existente)

// Postres
const tiramisu = require("../assets/tiramisu.jpg");
const caneolis = require("../assets/caneolis.jpg");

// Bebidas
const agua_mineral = require("../assets/agua_mineral.jpg");
const tinto = require("../assets/tinto.jpg");
const espumoso = require("../assets/espumoso.jpg");

// ----------------------------------------------------------------

export default function MenuScreen() {
  const pedirProducto = (nombre) => {
    Alert.alert("Pedido realizado", `Has pedido: ${nombre}`, [
      { text: "Aceptar" },
    ]);
  };

  const categorias = {
    Entradas: [
      {
        nombre: "Chavata de Entrada",
        descripcion: "Pan fresco y crujiente.",
        precio: "$45",
        img: chavata_entrada,
      },
      {
        nombre: "Crema de Champiñones",
        descripcion: "Deliciosa crema caliente.",
        precio: "$30",
        img: crema_champinones_entradas,
      },
    ],

    "Platillo Fuerte": [
      {
        nombre: "Pasta al Queso",
        descripcion: "Pasta cremosa con selección de quesos.",
        precio: "$110",
        img: pasta_queso,
      },
      {
        nombre: "Pasta al Tomate",
        descripcion: "Pasta con salsa de tomate.",
        precio: "$135",
        img: pasta_tomate,
      },
    ],

    Postres: [
      {
        nombre: "Tiramisú",
        descripcion: "Clásico postre italiano.",
        precio: "$55",
        img: tiramisu,
      },
      {
        nombre: "Caneolis",
        descripcion: "Crujiente masa rellena de crema dulce.",
        precio: "$50",
        img: caneolis,
      },
    ],

    Bebidas: [
      {
        nombre: "Agua Mineral",
        descripcion: "Agua refrescante con gas.",
        precio: "$20",
        img: agua_mineral,
      },
      {
        nombre: "Vino Tinto",
        descripcion: "Copa de vino tinto seco.",
        precio: "$80",
        img: tinto,
      },
      {
        nombre: "Espumoso",
        descripcion: "Bebida espumosa ligera.",
        precio: "$95",
        img: espumoso,
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={fondo} style={styles.bg} resizeMode="cover">
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Restaurante La Buena Comida</Text>

          {Object.keys(categorias).map((categoria) => (
            <View key={categoria} style={styles.categoriaContainer}>
              <Text style={styles.categoriaTitulo}>{categoria}</Text>

              {categorias[categoria].map((item, index) => (
                <View key={index} style={styles.productoCard}>
                  <Text style={styles.productoNombre}>{item.nombre}</Text>

                  <Image source={item.img} style={styles.img} />

                  <Text style={styles.productoDesc}>{item.descripcion}</Text>
                  <Text style={styles.productoPrecio}>{item.precio}</Text>

                  <TouchableOpacity
                    onPress={() => pedirProducto(item.nombre)}
                    style={styles.btn}
                  >
                    <Text style={styles.btnText}>Pedir</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    padding: 20,
    paddingBottom: 120,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.85)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  categoriaContainer: {
    width: "100%",
    marginBottom: 30,
  },
  categoriaTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
    textAlign: "center",
  },
  productoCard: {
    backgroundColor: "rgba(255,255,255,0.75)",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },
  productoNombre: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  img: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  productoDesc: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center",
  },
  productoPrecio: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "black",
    padding: 10,
    width: "60%",
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
