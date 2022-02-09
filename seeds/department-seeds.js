const sequelize = require('../config/connection');
const { Department } = require ('../models/Department');

const departmentData = [
    {
        department_name: 'produce'
    },
    {
        department_name: 'dairy'
    },
    {
        department_name: 'meat'
    },
    {
        department_name: 'pantry'
    },
    {
        department_name: 'essentials'
    }
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;