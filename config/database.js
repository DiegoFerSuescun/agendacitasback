const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: 'postgres',
//         port: process.env.DB_PORT
//     }
// );

const sequelize = new Sequelize(process.env.DB_DEPLOY, {
    dialect:'postgres',
    logging: false,
})

module.exports = sequelize;