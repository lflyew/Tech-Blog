const path = require('path');
const session = require('express-session');
const express = require('express');
const routes = require('./controllers');
const exhb = require('express-handlebars');
const helpers = require('./utils/helpers');
const sequelize = require('./config/config');
const seqStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const hb = exhb.create({ helpers });

const sess = {
    secret: "Top Secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new seqStore({
        db: sequelize
    })
};

app.use(session(sess));
app.engine('handlebars', hb.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App Listening On PORT ${PORT}!`);
    sequelize.sync({ force: false});
});