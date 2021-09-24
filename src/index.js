const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.set('views', path.resolve('./src/views'));
app.engine('hbs', handlebars({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.all('/', (req, res) => {
    res.render('index', { layout: false });
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));