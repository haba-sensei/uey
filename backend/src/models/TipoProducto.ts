import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig';

class TipoProducto extends Model { }

TipoProducto.init(
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
    },
    {
        sequelize,
        modelName: 'TipoProducto',
        tableName: 'tipos_producto',
        timestamps: false,
    }
);

export default TipoProducto;
