const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');

var morgan = require('morgan');
const app = express();

//parse application/json
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

var routes = require('./routes');
routes(app);

/*app.use('/', (req, res, next) => {
    return res.status(200).json({
        status: 'OK',
        message: 'Connection Succeed',
        data:'Hi'
    });
})*/

// daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

/*app.use((req, res, next) => {
    return res.status(404).json({
        status: 'NOT_FOUND',
        message: 'Resource Not Found',
        data: null
    });
});

app.use((err, req, res, next) => {
    return res.status(500).json({
        status: 'INTERNAL_SERVER_ERROR',
        message: err.message,
        data: null
    });
});*/

app.listen(3000, () => {
    console.log(`Server started on port`);
});