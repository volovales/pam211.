import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={40} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>
      </View>

      <Pressable
        style={[styles.button, styles.buttonSettings]}
        onPress={() => navigation.navigate('SettingsTab')}
      >
        <Text style={styles.buttonText}>Ir a Configuración</Text>
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
    marginBottom: 20,
    color: 'green',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonSettings: {
    backgroundColor: '#FF8800',
  },
  buttonHome: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
