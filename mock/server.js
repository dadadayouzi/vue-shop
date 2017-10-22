/**
 * Created by SONG on 2017/10/17.
 */
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'zfpx'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));
let index = require('./routes');
app.use('/api/',index);
let user = require('./routes/user');
app.use('/api/user/',user);
let car = require('./routes/carts');
app.use('/api/car/',car);
app.listen(3000);
