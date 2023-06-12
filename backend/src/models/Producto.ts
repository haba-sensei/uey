import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/dbConfig';

class Producto extends Model { }

Producto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        vendedor: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        tipo_producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'producto',
        tableName: 'productos',
        timestamps: false,
    }
);

export default Producto;
