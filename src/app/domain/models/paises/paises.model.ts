export class paisesModel {
  paises_id: string | number
  paises_descripcion: string
  paises_estado: number
  paises_usuarioRegistro: string
  paises_fechaRegistro: string

  constructor (
    paises_id: string | number,
    paises_descripcion: string,
    paises_estado: number,
    paises_usuarioRegistro: string,
    paises_fechaRegistro: string
  ) {
    this.paises_descripcion = paises_descripcion,
    this.paises_estado = paises_estado,
    this.paises_id = paises_id
    this.paises_usuarioRegistro = paises_usuarioRegistro
    this.paises_fechaRegistro = paises_fechaRegistro
  }
}
