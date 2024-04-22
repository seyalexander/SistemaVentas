export class clasificacionModel {
  clasificaciones_id: string | number
  clasificaciones_descripcion: string
  clasificacion_estado: number
  clasificacion_fechaRegistro: string
  clasificacion_usuarioRegistro: string

  constructor (
    clasificaciones_id: string | number,
    clasificaciones_descripcion: string,
    clasificacion_fechaRegistro: string,
    clasificacion_estado: number,
    clasificacion_usuarioRegistro: string
  ) {
    this.clasificaciones_id = clasificaciones_id,
    this.clasificaciones_descripcion = clasificaciones_descripcion,
    this.clasificacion_fechaRegistro = clasificacion_fechaRegistro,
    this.clasificacion_estado = clasificacion_estado,
    this.clasificacion_usuarioRegistro = clasificacion_usuarioRegistro
  }
}
