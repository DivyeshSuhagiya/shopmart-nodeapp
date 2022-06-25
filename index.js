require('dotenv').config()
require('./config/db')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const corsOptionsDelegate = require('./middleware/cors')
const multer = require('multer')
const path = require('path')

app.use('/uploads', express.static('uploads'))


// app.use(fileUpload())

app.use(
    express.json({
        limit: '1024mb',
    }),
)
app.use(bodyParser.json());



// app.use(cors(corsOptionsDelegate))
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require('./routes/index')
app.use('/api', routes)

const swaggerJson = require('./swagger/swagger.json')
const swaggerUi = require("swagger-ui-express");
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`The web server has started on port ${port}`);
});

