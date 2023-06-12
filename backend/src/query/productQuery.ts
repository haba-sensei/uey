import sequelize from "../db/dbConfig";
import Inventario from "../models/Inventario";
import Producto from "../models/Producto";

const listAllProducts = async () => {
    const productosSimples = await Producto.findAll({
        where: { tipo_producto_id: 1 },
    });
    const productosRentables = await Producto.findAll({
        where: { tipo_producto_id: 2 },
    });
    const productosEspacios = await Producto.findAll({
        where: { tipo_producto_id: 3 },
    });

    return {
        productosSimples,
        productosRentables,
        productosEspacios
    };
};
const getSimpleById = async (_: any, { id }: any) => {
    return await Producto.findOne({
        where: { id, tipo_producto_id: 1 },
    });
};
const getRentableById = async (_: any, { id }: any) => {
    return await Producto.findOne({
        where: { id, tipo_producto_id: 2 },
    });
};
const getEspaciosById = async (_: any, { id }: any) => {
    return await Producto.findOne({
        where: { id, tipo_producto_id: 3 },
    });
};
const disponible = async (_: any, { id }: any) => {
    return await Inventario.findOne({
        where: sequelize.literal(`cantidad_existente <> cantidad_rentada AND inventario.producto_id = ${id} `),
    });
};

export default {
    listAllProducts,
    getSimpleById,
    getRentableById,
    getEspaciosById,
    disponible,
}