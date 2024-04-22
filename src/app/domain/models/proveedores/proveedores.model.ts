export class proveedoresModel {
  proveedores_id: string | number
  proveedores_nombre: string
  proveedores_direccion: string
  proveedores_CPostal: string
  proveedores_poblacion: string
  proveedores_provincia: string
  proveedores_telefono: string
  proveedores_email: string
  proveedores_estado: number

  constructor (
    proveedores_id: string | number,
    proveedores_nombre: string,
    proveedores_direccion: string,
    proveedores_CPostal: string,
    proveedores_poblacion: string,
    proveedores_telefono: string,
    proveedores_email: string,
    proveedores_estado: number,
    proveedores_provincia: string
  ) {
    this.proveedores_CPostal = proveedores_CPostal,
    this.proveedores_direccion = proveedores_direccion,
    this.proveedores_id = proveedores_id,
    this.proveedores_nombre = proveedores_nombre,
    this.proveedores_poblacion = proveedores_poblacion,
    this.proveedores_telefono = proveedores_telefono,
    this.proveedores_email = proveedores_email,
    this.proveedores_estado = proveedores_estado
    this.proveedores_provincia = proveedores_provincia
  }
}
