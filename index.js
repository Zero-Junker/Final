const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@testdatabase.9y8fjbx.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());
const routes = require('./routes/routes');

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
require('dotenv').config();


