const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
// importing passport
const passport = require('passport');
//
const flash = require('express-flash');


const initalizePassport = require('./passport.config');
initalizePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const hbs = exphbs.create({});

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Very Wow Secret Message',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});