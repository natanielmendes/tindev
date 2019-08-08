require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

const user = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-1i6n5.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);