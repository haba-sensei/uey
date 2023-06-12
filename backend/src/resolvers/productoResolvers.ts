import handler from '../handlers/productHandler';
import Query from '../query/productQuery';

const ProductoSimple = handler.ProductoSimple;
const ProductoRentable = handler.ProductoRentable;
const ProductoEspacio = handler.ProductoEspacio;
const Renta = handler.renta;
const InventarioSimple = handler.InventarioSimple;
const InventarioRentable = handler.InventarioRentable;

const productoResolvers = {
    Query,
    ProductoSimple,
    ProductoRentable,
    ProductoEspacio,
    Renta,
    InventarioSimple,
    InventarioRentable,
};

export default productoResolvers;