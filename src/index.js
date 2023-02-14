//Imports
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//Settings
const app = express();
app.set('port', process.env.PORTU || 3000);
app.set('routes', path.join(__dirname, 'routes'))

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/athenea/usr', require(path.join(app.get('routes'), 'users.routes')));
app.use('/athenea/admin', require(path.join(app.get('routes'), 'admin.routes')));

//Static files

//Listen server
app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));