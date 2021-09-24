const express = require('express');

const app = express();

require('./config/handlebars')(app);

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));