var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').create({
    /* options */
});
const methodOverride = require('method-override');
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
// Method override
app.use(methodOverride('_method'));
//HTTP logger
// app.use(morgan('combined'))

// Templaate engine

// template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'view'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
