import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig';

class Renta extends Model { }

Renta.init(
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
        tipo_renta_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cantidad_rentada: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Renta',
        tableName: 'rentas',
        timestamps: false,
    }
);

export default Renta;
