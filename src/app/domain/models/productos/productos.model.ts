import { familiaProductosModel } from "../familiaProductos/familiaProductos.model";
import { IVACompraModel } from "../IVACompra/IVACompra.model";
import { IVAVentaModel } from "../IVAVenta/IVAVenta.model";
import { tipoProductoModel } from "../tipoProducto/tipoProducto.model";
import { unidadMedidaModel } from "../unidaMedida/unidadMedida.model";

export class productosModel {
  productosModel_id: string | number = 0;
  productosModel_estado: number = 0;
  productosModel_visible: number = 0;
  productosModel_descripcion: string = '';
  productosModel_tarifa_1: number = 0.0;
  productosModel_compra: number = 0.0;
  productosModel_fiscal: string = '';
  productosModel_codigoBarras: string = '';
  productosModel_unidadesDefecto: number = 0;
  productosModel_familiaProducto_fk: Array<familiaProductosModel[]> = [];
  productosModel_stockMinimo: number = 0;
  productosModel_stockMaximo: number = 0;
  productosModel_controlaStock: number = 0;
  productosModel_venderSinStock: number = 0;
  productosModel_devoluciones: number = 0;
  productosModel_unidadMedidaValor: number = 0;
  productosModel_imagen: string = '';
  productosModel_IVAVenta_fk: Array<IVAVentaModel[]> = [];
  productosModel_IVACompra_fk: Array<IVACompraModel[]> = [];
  productosModel_tipoProducto_fk: Array<tipoProductoModel[]> = [];
  productosModel_unidadesMedida_fk: Array<unidadMedidaModel[]> = [];
}
