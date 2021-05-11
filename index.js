// import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const routes = require('./routes')
const connectDB = require('./db');


// initialize app
const app = express();

// connect to mongodb
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

connectDB();

// define port
const PORT = 5002;

// var corsOptions = {
//   origin: "http://localhost:8080"
// };

// use middlewares in app
// enable cors
app.use(cors());

// fix mongoose depreciation
mongoose.set('useFindAndModify', false);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.status(200).send('Welcome to my crud application with mongodb.');
});

// initialize routes
app.use('/api/v1', routes);

// error handling middleware
app.use((err,req,res,next) => {
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
try {
    app.listen(PORT, async () => {
      console.log(`Running on ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }