/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@apollo/client";
import moment from "moment";
import { useState } from "react";

import Mapa from "../components/mapa";
import { GET_ESPACIOS_BY_ID } from "../querys/productQuerys";

const EspaciosTemplate: React.FC<any> = ({ id }) => {
    const [showMap, setShowMap] = useState(false);

    const openMap = () => {
        setShowMap(true);
    };

    const { loading, error, data } = useQuery(GET_ESPACIOS_BY_ID, {
        variables: { getEspaciosByIdId: id },
    });

    if (loading) return <p className="text-white">Cargando...</p>;
    if (error) return <p className="text-white">Error: {error.message}</p>;

    const productoEspacio = data.getEspaciosById;

    return (
        <div className="bg-white p-4">
            <h1 className="text-xl font-bold mb-4">{productoEspacio.nombre}</h1>
            <p className="text-gray-600">ID: {productoEspacio.id}</p>
            <p className="text-gray-600">
                Vendedor: {productoEspacio.vendedor}
            </p>
            <p className="text-gray-600">Precio: {productoEspacio.precio}</p>

            <div className="mt-4">
                <h2 className="text-lg font-bold">Imágenes</h2>
                <div className="inline-flex">
                    {productoEspacio.imagenes.map((imagen: any) => (
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
                <h2 className="text-lg font-bold">Renta</h2>
                <p>ID: {productoEspacio.renta.id}</p>
                <p>Tipo de renta: {productoEspacio.renta.tipoRenta.nombre}</p>
                <p>
                    Renta fecha inicio:{" "}
                    {moment(
                        new Date(productoEspacio.renta.fecha_inicio)
                    ).format("YYYY-DD-MM hh:mm")}
                </p>
                <p>
                    Renta fecha final:{" "}
                    {moment(new Date(productoEspacio.renta.fecha_fin)).format(
                        "YYYY-DD-MM hh:mm"
                    )}
                </p>
                <p>
                    Cantidad rentada: {productoEspacio.renta.cantidad_rentada}
                </p>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Maps</h2>
                <p>ID: {productoEspacio.espacio.id}</p>
                <p>Referencia: {productoEspacio.espacio.referencia}</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                    onClick={openMap}
                >
                    Mostrar ubipacion en google maps
                </button>
                {showMap && <Mapa />}
            </div>
        </div>
    );
};
export default EspaciosTemplate;
