const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Bascket = sequelize.define('bascket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },    
})

const BascketDevice = sequelize.define('bascket_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },    
})
