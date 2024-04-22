export class packsModel {
  packs_id: string | number
  packs_descripcion: string
  packs_estado: number

  constructor (
    packs_id: string | number,
    packs_descripcion: string,
    packs_estado: number
  ) {
    this.packs_descripcion = packs_descripcion,
    this.packs_id = packs_id,
    this.packs_estado = packs_estado
  }
}
