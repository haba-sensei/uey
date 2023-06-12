import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig';

class Imagen extends Model { }

Imagen.init(
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
        imagen: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Imagen',
        tableName: 'imagenes',
        timestamps: false,
    }
);

export default Imagen;
