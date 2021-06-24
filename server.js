const express = require('express');
const morgan = require('morgan')
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api/students/', require('./api/student'));
app.use('/api/heads/', require('./api/head'));
app.use('/api/grades/', require('./api/grade'));
app.use('/api/marks/', require('./api/mark'));


app.listen(3400, () => console.log(`server is running on http://localhost:3400`));