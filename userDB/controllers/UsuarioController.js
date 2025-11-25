import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = []; // Lista de vistas observadoras
  }
  // Inicializar BD
  async initialize() {
    await DatabaseService.initialize();
  }

  // SELECT – obtener usuarios
  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }
  // INSERT – crear usuario
  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);

      const nuevo = await DatabaseService.add(nombre.trim());

      // Avisar a la vista
      this.notifyListeners();

      return new Usuario(
        nuevo.id,
        nuevo.nombre,
        nuevo.fecha_creacion
      );
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }
  // OBSERVER
  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn());
  }
}
