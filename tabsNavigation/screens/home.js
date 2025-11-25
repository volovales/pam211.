import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.iconRow}>
        <Ionicons name="home-outline" size={28} color="red" />
        <Text style={styles.title}>Bienvenido a la pantalla principal</Text>
      </View>

      <Pressable
        style={[styles.button, styles.buttonProfile]}
        onPress={() => navigation.navigate('ProfileTab')}
      >
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonSettings]}
        onPress={() => navigation.navigate('SettingsTab')}
      >
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: 'red',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonProfile: {
    backgroundColor: '#007BFF',
  },
  buttonSettings: {
    backgroundColor: '#FF8800',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
    