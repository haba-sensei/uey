export interface TipoProductoProps {
    id: string;
    nombre: string;
}

export interface TipoRentaProps {
    id: string;
    nombre: string;
}

export interface ImagenProps {
    id: string;
    imagen: string;
}

export interface RentaProps {
    id: string;
    fecha_inicio: string;
    fecha_fin: string;
    cantidad_rentada: number;
    tipoRenta: TipoRentaProps;
}

export interface EspacioProps {
    id: string;
    posicion: string;
    referencia: string;
}

export interface InventarioSimpleProps {
    id: string;
    cantidad_existente: number;
    cantidad_restante: number;
    disponible: number;
}

export interface InventarioRentableProps {
    id: string;
    cantidad_existente: number;
    cantidad_rentada: number;
    cantidad_restante: number;
    disponible: number;
}

export interface ProductoSimpleProps {
    id: string;
    nombre: string;
    vendedor: string;
    precio: number;
    tipoProducto: TipoProductoProps;
    imagenes: [ImagenProps];
    inventario: InventarioSimpleProps;
}

export interface ProductoRentableProps {
    id: string;
    nombre: string;
    vendedor: string;
    precio: number;
    tipoProducto: TipoProductoProps;
    imagenes: [ImagenProps];
    inventario: InventarioRentableProps;
}

export interface ProductoEspaciosProps {
    id: string;
    nombre: string;
    vendedor: string;
    precio: number;
    tipoProducto: TipoProductoProps;
    imagenes: [ImagenProps];
    renta: RentaProps;
    espacio: EspacioProps;
}
