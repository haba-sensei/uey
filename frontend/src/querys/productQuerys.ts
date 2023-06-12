import { gql } from "@apollo/client";

export const GET_SIMPLE_BY_ID = gql`
    query GetSimpleById($getSimpleByIdId: String) {
        getSimpleById(id: $getSimpleByIdId) {
            id
            nombre
            vendedor
            precio
            tipoProducto {
                id
                nombre
            }
            imagenes {
                id
                imagen
            }
            inventario {
                id
                cantidad_existente
                cantidad_restante
                disponible
            }
        }
    }
`;

export const GET_RENTABLE_BY_ID = gql`
    query GetRentableById($getRentableByIdId: String) {
        getRentableById(id: $getRentableByIdId) {
            id
            nombre
            vendedor
            precio
            tipoProducto {
                id
                nombre
            }
            imagenes {
                id
                imagen
            }
            inventario {
                id
                cantidad_existente
                cantidad_rentada
                cantidad_restante
                disponible
            }
            renta {
                id
                fecha_inicio
                fecha_fin
                cantidad_rentada
                tipoRenta {
                    id
                    nombre
                }
            }
        }
    }
`;

export const GET_ESPACIOS_BY_ID = gql`
    query GetEspaciosById($getEspaciosByIdId: String) {
        getEspaciosById(id: $getEspaciosByIdId) {
            id
            nombre
            vendedor
            precio
            tipoProducto {
                id
                nombre
            }
            imagenes {
                id
                imagen
            }
            renta {
                id
                fecha_inicio
                fecha_fin
                cantidad_rentada
                tipoRenta {
                    id
                    nombre
                }
            }
            espacio {
                id
                posicion
                referencia
            }
        }
    }
`;

export const OBTENER_PRODUCTOS = gql`
    query ListAllProducts {
        listAllProducts {
            productosSimples {
                id
                nombre
                vendedor
                precio
                tipoProducto {
                    id
                    nombre
                }
                imagenes {
                    id
                    imagen
                }
            }
            productosRentables {
                id
                nombre
                vendedor
                precio
                tipoProducto {
                    id
                    nombre
                }
                imagenes {
                    id
                    imagen
                }
            }
            productosEspacios {
                id
                nombre
                vendedor
                precio
                tipoProducto {
                    id
                    nombre
                }
                imagenes {
                    id
                    imagen
                }
            }
        }
    }
`;
