var { Sequelize, Model, DataTypes } =  require('sequelize')

const sequelize = new Sequelize('bg-api', 'root', '', {
    dialect: 'mysql',
    dialectOptions: {
    }});

const User = sequelize.define('users', {
  username: DataTypes.STRING,
  lastname: DataTypes.STRING,
  useremail: DataTypes.STRING,
});

module.exports = User;