const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
const app = express();
const port = 3001;

// app.get('/', (req,res)=>{
//     res.send("hello world");
// })

var signupRoute = require('./Routes/signup');
var loginRoute = require('./Routes/login');
var createEventRoute = require('./Routes/createEvent');

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'CATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept',
    credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('keyboard_cat'));
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
app.use('/signup', signupRoute);
app.use('/login',loginRoute);
app.use('/createEvent', createEventRoute);



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});