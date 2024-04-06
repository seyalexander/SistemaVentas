import { impuestosModel } from "../impuestos/impuestos.model";
import { tipoTarifaModel } from "../tipoTarifas/tipoTarifas.model";

export class tarifasModel {
  tarifasModel_id: string | number = 0;
  tarifasModel_descripcion: string = '';
  tarifasModel_estado: number = 0;
  tarifasModel_inpuestos: number = 0;
  tarifasModel_personasDefecto: number = 0;
  tarifasModel_tarifasModel_personasDefecto_estado: number = 0;
  tarifasModel_tipoTarifas_fk: Array<tipoTarifaModel[]> = [];
  tarifasModel_impuesto_fk: Array<impuestosModel[]> = [];
}
