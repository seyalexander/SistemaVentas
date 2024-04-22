import { familiaProductosModel } from "../familiaProductos/familiaProductos.model";
import { IVACompraModel } from "../IVACompra/IVACompra.model";
import { IVAVentaModel } from "../IVAVenta/IVAVenta.model";
import { tipoProductoModel } from "../tipoProducto/tipoProducto.model";
import { unidadMedidaModel } from "../unidaMedida/unidadMedida.model";

export class productosModel {
  productos_id: string | number = 0
  productos_estado: number = 0;
  productos_visible: number = 0;
  productos_descripcion: string = '';
  productos_tarifa_1: number = 0.0;
  productos_compra: number = 0.0;
  productos_fiscal: string = '';
  productos_codigoBarras: string = '';
  productos_unidadesDefecto: number = 0;
  productos_familiaProducto_fk: Array<familiaProductosModel[]> = [];
  productos_stockMinimo: number = 0;
  productos_stockMaximo: number = 0;
  productos_controlaStock: number = 0;
  productos_venderSinStock: number = 0;
  productos_devoluciones: number = 0;
  productos_unidadMedidaValor: number = 0;
  productos_imagen: string = '';
  productos_IVAVenta_fk: Array<IVAVentaModel[]> = [];
  productos_IVACompra_fk: Array<IVACompraModel[]> = [];
  productos_tipoProducto_fk: Array<tipoProductoModel[]> = [];
  productos_unidadesMedida_fk: Array<unidadMedidaModel[]> = [];

  constructor(
    productos_id: string | number,
    productos_estado: string,
    productos_visible: number,
    productos_descripcion: string,
    productos_tarifa_1: number,
    productos_compra: number,
    productos_fiscal: string,
    productos_codigoBarras: string,
    productos_unidadesDefecto: number,
    productos_familiaProducto_fk: familiaProductosModel,
    productos_stockMinimo: number,
    productos_stockMaximo: number,
    productos_controlaStock: number,
    productos_venderSinStock: number,
    productos_devoluciones: number,
    productos_unidadMedidaValor: number,
    productos_imagen: string,
    productos_IVAVenta_fk: IVAVentaModel,
    productos_IVACompra_fk: IVACompraModel,
    productos_tipoProducto_fk: tipoProductoModel,
    productos_unidadesMedida_fk : productosModel
  ) {

  }
}
