/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProductoCard from "./productoCard";

const ProductoContainer: React.FC<any> = (value) => {
    return (
        <div className="mt-8">
            <div className="flex justify-between items-center">
                <h3 className="text-white text-lg font-semibold mb-4">
                    {value.label}
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {value.producto.map((element: any) => (
                    <div key={element.id}>
                        <ProductoCard data={element} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductoContainer;
