import TipoRenta from "../models/TipoRenta";
import Espacio from "../models/Espacio";
import Imagen from "../models/Imagen";
import Renta from "../models/Renta";
import TipoProducto from "../models/TipoProducto";
import Inventario from "../models/Inventario";
import sequelize from "../db/dbConfig";

const obtenerTipoProducto = async (prev: any) => {
    return await TipoProducto.findOne({ where: { id: prev.tipo_producto_id } });
};

const obtenerImagenesProducto = async (prev: any) => {
    return await Imagen.findAll({ where: { producto_id: prev.id } });
};

const obtenerEspacioProducto = async (prev: any) => {
    return await Espacio.findOne({ where: { producto_id: prev.id } });
};

const obtenerRentaProducto = async (prev: any) => {
    return await Renta.findOne({ where: { producto_id: prev.id }, });
};

const obtenerTipoRenta = async (prev: any) => {
    return await TipoRenta.findOne({ where: { id: prev.tipo_renta_id }, });
};

const obtenerInventarioProducto = async (prev: any) => {
    return await Inventario.findOne({ where: { producto_id: prev.id } });
};

const obtenerDisponiblidad = async (prev: any) => {
    return await Inventario.count({
        where: sequelize.literal(`cantidad_existente <> cantidad_rentada AND inventario.producto_id = ${prev.id} `),
    });
};

export default {
    ProductoSimple: {
        tipoProducto: obtenerTipoProducto,
        imagenes: obtenerImagenesProducto,
        inventario: obtenerInventarioProducto,
    },
    ProductoRentable: {
        tipoProducto: obtenerTipoProducto,
        imagenes: obtenerImagenesProducto,
        renta: obtenerRentaProducto,
        inventario: obtenerInventarioProducto,
    },
    ProductoEspacio: {
        tipoProducto: obtenerTipoProducto,
        imagenes: obtenerImagenesProducto,
        renta: obtenerRentaProducto,
        espacio: obtenerEspacioProducto,
    },
    renta: {
        tipoRenta: obtenerTipoRenta
    },
    InventarioSimple: {
        disponible: obtenerDisponiblidad
    },
    InventarioRentable: {
        disponible: obtenerDisponiblidad
    },

}

