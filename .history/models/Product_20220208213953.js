const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        product_name: {
              types: DataTypes.STRING,
              allowNull: false
          },
        Product_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'department',
                key: 'id'
            }
        }  
    }
)

module.exports = Product;