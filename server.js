const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const connection = require('./config/connection');

const routes = require('./routes/api/api_routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

connection.connect(err => {
    if (err) {
        throw new Error(err);
    }

    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
