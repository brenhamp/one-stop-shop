const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type:DataTypes.STRING,
            allowNull: false
        },
        img: {
            type:DataTypes.STRING
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'department',
                key: 'id'
            }
        }  
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;