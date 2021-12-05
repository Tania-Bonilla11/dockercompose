const express = require('express');
const path = require('path');
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://mongo:27017/db')
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.error(err));

app.use(express.static(path.join(process.cwd(), "/src/public")));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "/src/views"));
app.use(require('./route/index.routes'));

app.listen(3000, () => console.log("servidor web conectado"));