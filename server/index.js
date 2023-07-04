const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const postsRoutes = require('./routes/post.routes');
const usersRoutes = require('./routes/user.routes');
const path = require('path');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
