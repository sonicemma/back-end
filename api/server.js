const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require ('../auth/auth-router');
const songRouter = require('../songs/songs-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/songs', songRouter);

server.get('/', (req, res) => {
    res.json({api: 'works'});
});

module.exports = server;