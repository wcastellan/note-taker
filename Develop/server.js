const express = require('express');
const app = express();

// route files used
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

// set the port path
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

//listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});