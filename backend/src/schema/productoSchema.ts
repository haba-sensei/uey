const productoSchema = `#graphql
type TipoProducto {
  id: ID!
  nombre: String!
}

type TipoRenta {
  id: ID!
  nombre: String!
}

type Imagen {
  id: ID!
  imagen: String!
}

type Renta {
  id: ID!
  fecha_inicio: String!
  fecha_fin: String!
  cantidad_rentada: Int!
  tipoRenta: TipoRenta!
}

type Espacio {
  id: ID!
  posicion: String!
  referencia: String!
}

type InventarioSimple {
  id: ID!
  cantidad_existente: Int!
  cantidad_restante: Int!
  disponible: Int
}

type InventarioRentable {
  id: ID!
  cantidad_existente: Int!
  cantidad_rentada: Int!
  cantidad_restante: Int!
  disponible: Int
}

type ProductoSimple {
  id: ID!
  nombre: String!
  vendedor: String!
  precio: Float!
  tipoProducto: TipoProducto!
  imagenes: [Imagen]!
  inventario: InventarioSimple 
}

type ProductoRentable {
  id: ID!
  nombre: String!
  vendedor: String!
  precio: Float!
  tipoProducto: TipoProducto!
  imagenes: [Imagen]!
  inventario: InventarioRentable!
  renta: Renta!
}

type ProductoEspacio {
  id: ID!
  nombre: String!
  vendedor: String!
  precio: Float!
  tipoProducto: TipoProducto!
  imagenes: [Imagen]!
  renta: Renta!
  espacio: Espacio!
}

type Producto {
  id: ID!
  nombre: String!
  vendedor: String!
  precio: Float!
  imagenes: [Imagen]!
}

type Productos {
  productosSimples: [ProductoSimple]
  productosRentables: [ProductoRentable]
  productosEspacios: [ProductoEspacio]
}

type Query {
  listAllProducts: Productos
  getSimpleById(id: String): ProductoSimple
  getRentableById(id: String): ProductoRentable
  getEspaciosById(id: String): ProductoEspacio
  disponible(id: String): InventarioRentable
}
`;

export default productoSchema;

