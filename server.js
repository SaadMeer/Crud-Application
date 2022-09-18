const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan'); 
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
app.get('/', (req, res) => {
    res.render('index.ejs');
}); 


const port = process.env.port || 8080;

//log Request 
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs")) if have different folder 

//load assets
app.use(express.static(`${__dirname}/assets`));

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});