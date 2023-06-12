import { useQuery } from "@apollo/client";
import React from "react";

import ProductoContainer from "./components/productoContainer";
import { OBTENER_PRODUCTOS } from "./querys/productQuerys";

const App: React.FC = () => {
    const { loading, error, data } = useQuery(OBTENER_PRODUCTOS);

    if (loading) return <p className="text-white">Cargando...</p>;
    if (error) return <p className="text-white">Error: {error.message}</p>;

    const productosSimples = data.listAllProducts.productosSimples;
    const productosRentables = data.listAllProducts.productosRentables;
    const productosEspacios = data.listAllProducts.productosEspacios;

    return (
        <div className="p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white mb-6">
                    Reto Uey.mx
                </h1>
            </div>

            <ProductoContainer
                producto={productosSimples}
                label="Producto Simple"
            />
            <ProductoContainer
                producto={productosRentables}
                label="Producto Rentable"
            />
            <ProductoContainer
                producto={productosEspacios}
                label="Producto Espacio"
            />
        </div>
    );
};

export default App;
