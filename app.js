const express = require('express');
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db',{
   /*  useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true */
}).then(()=>{
    console.log("DB connected succesful!")
});

//Template Engine
app.set('view engine', 'ejs');

  
//Middlewares
app.use(express.static('public'));
app.use(fileUpload());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

  
const port = 3000;
app.listen(port, () => {
  console.log(`Àpp started on port ${port}`);
});
