import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

// 🚀 ESTE ES EL ARCHIVO CORRECTO Y FUNCIONAL
class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = "usuarios";
  }

  // Inicializar según plataforma
  async initialize() {
    if (Platform.OS === "web") {
      console.log("DatabaseService: usando localStorage en web");

      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
      }

      return;
    }

    console.log("DatabaseService: inicializando SQLite móvil...");

    // 🚀 USAR openDatabaseAsync → el correcto
    this.db = await SQLite.openDatabaseAsync("miapp.db");

    // Crear tabla si no existe
    await this.db.execAsync(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        fecha_creacion TEXT NOT NULL
      );
    `);
  }

  // Obtener todos los usuarios
  async getAll() {
    if (Platform.OS === "web") {
      return JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    }

    const rows = await this.db.getAllAsync("SELECT * FROM usuarios ORDER BY id DESC");
    return rows;
  }

  // Agregar usuario
  async add(nombre) {
    const fecha = new Date().toISOString();

    if (Platform.OS === "web") {
      let usuarios = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
      const nuevo = {
        id: Date.now(),
        nombre,
        fecha_creacion: fecha
      };
      usuarios.unshift(nuevo);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevo;
    }

    const result = await this.db.runAsync(
      "INSERT INTO usuarios (nombre, fecha_creacion) VALUES (?, ?)",
      [nombre, fecha]
    );

    return {
      id: result.lastInsertRowId,
      nombre,
      fecha_creacion: fecha
    };
  }

  // Actualizar usuario
  async update(id, nombreNuevo) {
    const fecha = new Date().toISOString();

    if (Platform.OS === "web") {
      let usuarios = JSON.parse(localStorage.getItem(this.storageKey) || "[]");

      const index = usuarios.findIndex(u => u.id === Number(id));
      if (index === -1) return null;

      usuarios[index].nombre = nombreNuevo;
      usuarios[index].fecha_creacion = fecha;

      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return usuarios[index];
    }

    await this.db.runAsync(
      "UPDATE usuarios SET nombre = ?, fecha_creacion = ? WHERE id = ?",
      [nombreNuevo, fecha, id]
    );

    return {
      id,
      nombre: nombreNuevo,
      fecha_creacion: fecha
    };
  }

  // Eliminar usuario
  async delete(id) {
    if (Platform.OS === "web") {
      let usuarios = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
      usuarios = usuarios.filter(u => u.id !== Number(id));
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return true;
    }

    await this.db.runAsync("DELETE FROM usuarios WHERE id = ?", [id]);
    return true;
  }
}

export default new DatabaseService();
