/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@apollo/client";
import moment from "moment";

import { GET_RENTABLE_BY_ID } from "../querys/productQuerys";

const RentablesTemplate: React.FC<any> = ({ id }) => {
    const { loading, error, data } = useQuery(GET_RENTABLE_BY_ID, {
        variables: { getRentableByIdId: id },
    });

    if (loading) return <p className="text-white">Cargando...</p>;
    if (error) return <p className="text-white">Error: {error.message}</p>;

    const productoRentable = data.getRentableById;

    return (
        <div className="bg-white p-4">
            <h1 className="text-xl font-bold mb-4">
                {productoRentable.nombre}
            </h1>
            <p className="text-gray-600">ID: {productoRentable.id}</p>
            <p className="text-gray-600">
                Vendedor: {productoRentable.vendedor}
            </p>
            <p className="text-gray-600">Precio: {productoRentable.precio}</p>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Tipo de producto</h2>
                <p>ID: {productoRentable.tipoProducto.id}</p>
                <p>Nombre: {productoRentable.tipoProducto.nombre}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Imágenes</h2>
                <div className="inline-flex">
                    {productoRentable.imagenes.map((imagen: any) => (
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
                <p>ID: {productoRentable.inventario.id}</p>
                <p>
                    Cantidad existente:{" "}
                    {productoRentable.inventario.cantidad_existente}
                </p>
                <p>
                    Cantidad rentada:{" "}
                    {productoRentable.inventario.cantidad_rentada}
                </p>
                <p>
                    Cantidad restante:{" "}
                    {productoRentable.inventario.cantidad_restante}
                </p>
                <p>
                    Disponibilidad:{"  "}
                    {productoRentable.inventario.disponible === 1
                        ? "Si esta disponible"
                        : "No esta disponible"}
                </p>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Renta</h2>
                <p>ID: {productoRentable.renta.id}</p>
                <p>Tipo de renta: {productoRentable.renta.tipoRenta.nombre}</p>
                <p>
                    Renta fecha inicio:{" "}
                    {moment(
                        new Date(productoRentable.renta.fecha_inicio)
                    ).format("YYYY-DD-MM hh:mm")}
                </p>
                <p>
                    Renta fecha final:{" "}
                    {moment(new Date(productoRentable.renta.fecha_fin)).format(
                        "YYYY-DD-MM hh:mm"
                    )}
                </p>
                <p>
                    Cantidad rentada: {productoRentable.renta.cantidad_rentada}
                </p>
            </div>
        </div>
    );
};
export default RentablesTemplate;
