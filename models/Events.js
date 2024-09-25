const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');


const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,  
        primaryKey: true      
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    start:{
        type: DataTypes.STRING,
        allowNull:false
    },
    end:{
        type: DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    service:{
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type: DataTypes.STRING,
        allowNull:false
    },
    notes:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});

module.exports = Event;