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

export default function MenuScreen() {
  const pedirProducto = (nombre) => {
    Alert.alert(
      "Pedido realizado",
      ` Has pedido: ${nombre}`,
      [{ text: "Aceptar" }]
    );
  };

  // LISTA DE PRODUCTOS con imágenes ONLINE
  const categorias = {
    Entradas: [
      {
        nombre: "Ensalada Fresca",
        descripcion: "Lechuga, tomate, pepino y aderezo ligero.",
        precio: "$45",
        img: { uri: "https://i.imgur.com/2yaf2kI.jpg" },
      },
      {
        nombre: "Pan con Ajo",
        descripcion: "Pan artesanal horneado con mantequilla de ajo.",
        precio: "$30",
        img: { uri: "https://i.imgur.com/36YV7lE.jpg" },
      },
    ],

    "Platillo Fuerte": [
      {
        nombre: "Pasta Alfredo",
        descripcion: "Pasta cremosa con queso parmesano.",
        precio: "$110",
        img: { uri: "https://i.imgur.com/JKY6ORu.jpg" },
      },
      {
        nombre: "Pollo a la Parrilla",
        descripcion: "Pechuga de pollo con verduras.",
        precio: "$135",
        img: { uri: "https://i.imgur.com/7m7i7SM.jpg" },
      },
    ],

    Postres: [
      {
        nombre: "Pastel de Chocolate",
        descripcion: "Chocolate amargo con relleno cremoso.",
        precio: "$55",
        img: { uri: "https://i.imgur.com/JNafS1N.jpg" },
      },
      {
        nombre: "Pay de Limón",
        descripcion: "Postre frío con sabor a limón.",
        precio: "$50",
        img: { uri: "https://i.imgur.com/L9QmTkf.jpg" },
      },
    ],

    Bebidas: [
      {
        nombre: "Agua Mineral",
        descripcion: "Agua refrescante con gas.",
        precio: "$20",
        img: { uri: "https://i.imgur.com/UC8s3sf.jpg" },
      },
      {
        nombre: "Vino Tinto",
        descripcion: "Copa de vino tinto seco.",
        precio: "$80",
        img: { uri: "https://i.imgur.com/GPc0kRw.jpg" },
      },
      {
        nombre: "Espumoso",
        descripcion: "Bebida espumosa ligera.",
        precio: "$95",
        img: { uri: "https://i.imgur.com/mKuaqpR.jpg" },
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: "https://i.imgur.com/7lYQYwH.jpeg" }}
        style={styles.bg}
        resizeMode="cover"
      >
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
