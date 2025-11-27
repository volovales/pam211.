import { Usuario } from '../models/usuario';
import db from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  async initialize() {
    await db.initialize();
  }

  async obtenerUsuarios() {
    try {
      const data = await db.getAll();
      // Convertir a instancias de Usuario
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);
      const nuevo = await db.add(nombre.trim());
      this.notifyListeners();
      return new Usuario(nuevo.id, nuevo.nombre, nuevo.fecha_creacion);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  async actualizarUsuario(id, nombre) {
    try {
      Usuario.validar(nombre);
      const actualizado = await db.update(id, nombre.trim());
      this.notifyListeners();
      return new Usuario(actualizado.id, actualizado.nombre, actualizado.fecha_creacion);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  async eliminarUsuario(id) {
    try {
      await db.delete(id);
      this.notifyListeners();
      return { id, mensaje: 'Usuario eliminado correctamente' };
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb());
  }
}
