var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var productRouter = require('./routes/products')
var productFamilyRouter = require('./routes/productFamily');
var productUnitRouter = require('./routes/productUnit');
var productTaxRouter = require('./routes/productTax');
var clientRouter = require('./routes/clients');

var bodyParser = require('body-parser')
var cors = require('cors');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/productFamily', productFamilyRouter);
app.use('/productUnits', productUnitRouter);
app.use('/productTax', productTaxRouter);
app.use('/clients', clientRouter);

module.exports = app;