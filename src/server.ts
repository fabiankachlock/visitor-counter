import express from 'express';

const PORT = process.env.PORT || 9000;
const server = express()

server.get('/ping', (req, res) => {
    res.send('pong')
})

server.listen(PORT)