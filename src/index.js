var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').create({
    /* options */
});
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP logger
// app.use(morgan('combined'))

// template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/view'));

// Routes iniy
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
