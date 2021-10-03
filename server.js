const express       = require('express');
const morganBody    = require('morgan-body');
const fs            = require('fs')
const path          = require('path');
const actuator      = require('express-actuator');


//require route configuration
const route = require('./routes/route.js');

APP_PORT = 3000

const app = express();

// parse application/json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const log = fs.createWriteStream(
    path.join(__dirname, "logs", "express.log"), { flags: "a" }
  );

// hook morganBody to express app
morganBody(app, {
    noColors: false,
    stream: log
});

const options = {
    basePath: '/actuator',
    infoGitMode: 'simple',
    infoBuildOptions: null,
    infoDateFormat: null, 
    customEndpoints: []
};
  
app.use(actuator(options));

//middlewares
app.set('view engine','ejs');


//rendering form.ejs
app.get("/",function(req,res){
    res.render("form");
});

//creating form
app.post("/",(req,res)=>{
    var username=req.body.honoree;
    if(username){
        res.status(200).render('greetingwithname', {Honoree: username})
    }
    if(req.body.honoree.length === 0){
        res.status(200).render('greeting')
    }
    
});

app.use('/', route)

app.listen(APP_PORT, ()=>{
    console.log(`Server is running ${APP_PORT}`)
})

