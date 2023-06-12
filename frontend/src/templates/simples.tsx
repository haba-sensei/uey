/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@apollo/client";

import { GET_SIMPLE_BY_ID } from "../querys/productQuerys";

const SimplesTemplate: React.FC<any> = ({ id }) => {
    const { loading, error, data } = useQuery(GET_SIMPLE_BY_ID, {
        variables: { getSimpleByIdId: id },
    });

    if (loading) return <p className="text-white">Cargando...</p>;
    if (error) return <p className="text-white">Error: {error.message}</p>;

    const productoSimple = data.getSimpleById;

    return (
        <div className="bg-white p-4">
            <h1 className="text-xl font-bold mb-4">{productoSimple.nombre}</h1>
            <p className="text-gray-600">ID: {productoSimple.id}</p>
            <p className="text-gray-600">Vendedor: {productoSimple.vendedor}</p>
            <p className="text-gray-600">Precio: {productoSimple.precio}</p>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Tipo de producto</h2>
                <p>ID: {productoSimple.tipoProducto.id}</p>
                <p>Nombre: {productoSimple.tipoProducto.nombre}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Imágenes</h2>
                <div className="inline-flex">
                    {productoSimple.imagenes.map((imagen: any) => (
                        <img
                            key={imagen.id}
                            src={imagen.imagen}
                            alt="Imagen de producto"
                            className="w-24 h-24 object-cover mr-2"
                        />
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Inventario</h2>
                <p>ID: {productoSimple.inventario.id}</p>
                <p>
                    Cantidad existente:{" "}
                    {productoSimple.inventario.cantidad_existente}
                </p>
                <p>
                    Cantidad restante:{" "}
                    {productoSimple.inventario.cantidad_restante}
                </p>
                <p>
                    Disponibilidad:{"  "}
                    {productoSimple.inventario.disponible === 1
                        ? "Si esta disponible"
                        : "No esta disponible"}
                </p>
            </div>
        </div>
    );
};
export default SimplesTemplate;
