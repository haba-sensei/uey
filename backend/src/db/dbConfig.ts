import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('uey_bd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
