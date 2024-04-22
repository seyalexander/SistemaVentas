export class impuestosModel {
  impuestos_id: string | number = 0;
  impuestos_descripcion: string = '';
  impuestos_estado : number = 0;

  constructor (
    impuestos_id: string | number,
    impuestos_descripcion: string,
    impuestos_estado: number
  ) {
    this.impuestos_id = impuestos_id,
    this.impuestos_descripcion = impuestos_descripcion,
    this.impuestos_estado = impuestos_estado
  }
}
