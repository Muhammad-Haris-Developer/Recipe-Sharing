var express = require('express');
var path = require('path');
var logger = require('morgan');
const { mongoConnect } = require('./config/database');
const port = process.env.PORT || 3000;
const cron = require('node-cron');
const CronJob = require('./Functions/CronJob');

var usersRouter = require('./routes/users');
var recipeRouter = require('./routes/recipe');
var ratingRouter = require('./routes/rating');
var likesRouter = require('./routes/likes');
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(usersRouter);
app.use(recipeRouter);
app.use(ratingRouter);
app.use(likesRouter);
app.use(indexRouter);

//Cron Jobs 
cron.schedule('*/10 * * * *', () => {
  CronJob.deleteDataAfter10Minutes();
});

// Not FOund Route
app.use((req, res, next) => {
  return res.status(404).json({
    status: 404,
    error: null,
    message: 'Not Found',
    data: {}
  });
});

// MongoDB Started
mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Server Started at: http://localhost:${port}`);
  });
})

module.exports = app;