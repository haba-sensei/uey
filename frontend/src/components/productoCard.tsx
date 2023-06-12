/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

import EspaciosTemplate from "../templates/espacios";
import RentablesTemplate from "../templates/rentables";
import SimplesTemplate from "../templates/simples";

const ProductoCard: React.FC<any> = (data: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const producto = data.data;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (event: any) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    const renderModalContent = () => {
        if (producto.tipoProducto.id === "1")
            return <SimplesTemplate key={producto.id} id={producto.id} />;
        if (producto.tipoProducto.id === "2")
            return <RentablesTemplate key={producto.id} id={producto.id} />;
        if (producto.tipoProducto.id === "3")
            return <EspaciosTemplate key={producto.id} id={producto.id} />;
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4" key={producto.id}>
            <img
                src={producto.imagenes[0].imagen}
                alt={producto.nombre}
                className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
                <p className="text-gray-600 mb-2">
                    Vendedor: {producto.vendedor}
                </p>
                <p className="text-gray-600 mb-4">Precio: {producto.precio}</p>
                <button
                    className="bg-cyan-900 text-white px-4 py-2 rounded-md w-full"
                    type="button"
                    onClick={openModal}
                >
                    Ver detalles
                </button>
                {isModalOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50"
                        onClick={handleOverlayClick}
                    >
                        <div className="bg-white rounded-lg shadow-md p-8 w-1/2 ">
                            {renderModalContent()}
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ProductoCard;
