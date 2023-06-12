import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig';

class Inventario extends Model { }

Inventario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad_existente: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad_rentada: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad_restante: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Inventario',
        tableName: 'inventario',
        timestamps: false,
    }
);

export default Inventario;
