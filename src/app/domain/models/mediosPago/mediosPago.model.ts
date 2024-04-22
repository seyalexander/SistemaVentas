export class mediosPagoModel {
  mediosPago_id: string | number
  mediosPago_nombre: string
  mediosPago_estado: number
  mediosPago_imagen: string

  constructor(
    mediosPago_id: string | number,
    mediosPago_nombre: string,
    mediosPago_estado: number,
    mediosPago_imagen: string
  ) {
    this.mediosPago_estado = mediosPago_estado,
      this.mediosPago_id = mediosPago_id,
      this.mediosPago_imagen = mediosPago_imagen,
      this.mediosPago_nombre = mediosPago_nombre
  }
}
