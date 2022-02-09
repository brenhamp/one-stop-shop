const { Model, DataTypes } = require('sequelize');

class Department extends Model {}

Department.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Department;