import { useEffect, useState, useCallback } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, Alert, ActivityIndicator, Platform,
  Modal, Keyboard
} from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

// Esta pantalla crea su propio controller y lo inicializa.
// Asegúrate de NO crear otro controller en App.js para evitar duplicados.
const controller = new UsuarioController();

export default function UsuarioView() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [editando, setEditando] = useState(false);
  const [eliminando, setEliminando] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nombreEditado, setNombreEditado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      console.log(`${data.length} usuarios cargados`);
      setUsuarios(data);
    } catch (error) {
      Alert.alert('Error', error.message || String(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    controller.addListener(cargarUsuarios);
    return () => controller.removeListener(cargarUsuarios);
  }, [cargarUsuarios]);

  const handleAgregar = async () => {
    if (guardando || !nombre.trim()) return;
    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert("Usuario Creado", `${usuarioCreado.nombre} guardado con ID: ${usuarioCreado.id}`);
      setNombre('');
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Error", error.message || String(error));
    } finally {
      setGuardando(false);
    }
  };

  const handleEditar = (usuario) => {
    setUsuarioEditando(usuario);
    setNombreEditado(usuario.nombre);
    setModalVisible(true);
  };

  const handleConfirmarEdicion = async () => {
    if (!nombreEditado.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }
    try {
      setEditando(true);
      const usuarioActualizado = await controller.actualizarUsuario(usuarioEditando.id, nombreEditado);
      Alert.alert("Usuario Actualizado", `Usuario actualizado a: ${usuarioActualizado.nombre}`);
      setModalVisible(false);
      setUsuarioEditando(null);
      setNombreEditado('');
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Error", error.message || String(error));
    } finally {
      setEditando(false);
    }
  };

  const handleEliminar = async (id) => {
    if (eliminando) return;

    const confirmar = () => {
      setEliminando(true);
      controller.eliminarUsuario(id)
        .then(() => {
          Alert.alert("Usuario Eliminado", `Usuario con ID ${id} eliminado`);
        })
        .catch(err => Alert.alert("Error", err.message || String(err)))
        .finally(() => setEliminando(false));
    };

    if (Platform.OS === "web") {
      if (confirm("¿Seguro que deseas eliminar este usuario?")) confirmar();
    } else {
      Alert.alert(
        "Eliminar Usuario",
        "¿Seguro que deseas eliminar este usuario?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Eliminar", style: "destructive", onPress: confirmar }
        ]
      );
    }
  };

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {item.fechaCreacion ? new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric', month: 'long', day: 'numeric'
          }) : '-'}
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={() => handleEditar(item)}>
          <Text style={styles.actionButtonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={() => handleEliminar(item.id)}>
          <Text style={styles.actionButtonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD USUARIOS</Text>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Insertar Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity
          style={[styles.button, guardando && styles.buttonDisabled]}
          onPress={handleAgregar}
          disabled={guardando || !nombre.trim()}
        >
          {guardando ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Agregar Usuario</Text>}
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Cargando usuarios...</Text>
        </View>
      ) : (
        <FlatList
          data={usuarios}
          renderItem={renderUsuario}
          keyExtractor={item => String(item.id)}
          style={styles.list}
          ListEmptyComponent={<View style={styles.emptyContainer}><Text style={styles.emptyText}>No hay usuarios registrados</Text></View>}
        />
      )}

      <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Usuario</Text>

            <TextInput
              style={styles.input}
              placeholder="Nuevo nombre del usuario"
              value={nombreEditado}
              onChangeText={setNombreEditado}
              autoFocus
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.modalButton, styles.confirmButton]} onPress={handleConfirmarEdicion} disabled={editando}>
                {editando ? <ActivityIndicator color="#fff" /> : <Text style={styles.modalButtonText}>Guardar</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 15 },
  formContainer: { marginBottom: 30 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  userItem: { flexDirection: 'row', backgroundColor: '#fff', padding: 16, marginBottom: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ccc' },
  userNumber: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  userNumberText: { color: '#fff', fontWeight: 'bold' },
  userInfo: { flex: 1 },
  actionsContainer: { flexDirection: 'row', gap: 6 },
  actionButton: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, minWidth: 60, alignItems: 'center' },
  editButton: { backgroundColor: '#FFA500' },
  deleteButton: { backgroundColor: '#D11A2A' },
  actionButtonText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  emptyContainer: { padding: 40, alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#666' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', borderRadius: 12, padding: 20, width: '80%' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  modalButton: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  cancelButton: { backgroundColor: '#8E8E93' },
  confirmButton: { backgroundColor: '#007AFF' },
  modalButtonText: { color: '#fff', fontWeight: '600' },
  loadingContainer: { alignItems: 'center', padding: 20 },
  loadingText: { marginTop: 8, color: '#666' },
  userDate: { fontSize: 12, color: '#555', marginTop: 6 },
  userId: { fontSize: 12, color: '#333' },
});
