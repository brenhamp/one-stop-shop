const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
// Will add JawsDB once we push to heroku and add to app 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
    
module.exports = sequelize;