const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models');
const app = express();


// ejs setup
app.use(ejsLayouts);
app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'));


// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("SERVER LIVE ON PORT 3000");
});