export class Usuario {
  constructor(id, nombre, fecha_creacion) {
    this.id = id;
    this.nombre = nombre;
    // normalizamos a fechaCreacion en el objeto para uso en la UI
    this.fechaCreacion = fecha_creacion;
  }

  static validar(nombre) {
    if (!nombre || !String(nombre).trim()) {
      throw new Error("El nombre no puede estar vacío");
    }
  }
}
