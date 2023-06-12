import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig';

class Espacio extends Model { }

Espacio.init(
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
        posicion: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        referencia: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Espacio',
        tableName: 'espacios',
        timestamps: false,
    }
);

export default Espacio;
