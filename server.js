// Commenting out specific lines of code until ready for use

// const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
// const exphbs = require('express-handlebars');
const session = require('express-session');
// const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});