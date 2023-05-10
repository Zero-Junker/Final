const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
mongoose.connect("mongodb+srv://kmjunker:letmein123@cluster0.zh4cqfx.mongodb.net/?retryWrites=true&w=majority", {
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
const routes = require('./routes/root');

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
require('dotenv').config();


