import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig';

class TipoRenta extends Model { }

TipoRenta.init(
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
        modelName: 'TipoRenta',
        tableName: 'tipos_renta',
        timestamps: false,
    }
);

export default TipoRenta;
