import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>

      <Ionicons name="settings-outline" size={40} color="blue" />
      <Text style={styles.title}>Configuraciones de usuario</Text>

      <Pressable
        style={[styles.button, styles.buttonProfile]}
        onPress={() => navigation.navigate('ProfileTab')}
      >
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonHome]}
        onPress={() => navigation.navigate('HomeTab')}
      >
        <Text style={styles.buttonText}>Volver a Home</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonProfile: { backgroundColor: '#007BFF' },
  buttonHome: { backgroundColor: '#28A745' },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
