const express = require('express');
const errorHandler = require('./common/middlewares/error-handler.middleware');
const citiesController = require("./cities/cities.controller");
const app = express();

app.use(express.json());

app.use('/cities/', citiesController);

app.listen(3001, () => {
    console.log('Server is running! 🚀');
})

app.use(errorHandler);
