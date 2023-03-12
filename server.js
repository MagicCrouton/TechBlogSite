const express = require('express');
const session = require('express-session');
const hndlbrs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();

// connect rest of ultilites to main server file
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
// borrowed from activity 17
const sess = {
    secret: 'Super secret secret',
    cookie: {
      // Stored in milliseconds
      maxAge: 1 * 60 * 60 * 1000, // expires after 1 hour
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
app.use(session(sess));

const hbs = hndlbrs.create({helpers});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log('Now listening'));
  });