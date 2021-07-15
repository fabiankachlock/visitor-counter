require('dotenv').config()

import express from 'express';
import { queryAndUpdateSite } from './db';


const PORT = process.env.PORT || 9000;
const server = express()

server.use(async (req, _res, next) => {
    console.info('[' + req.method + '] ' + req.url)
    next()
})

server.get('/ping', (_req, res) => {
    res.send('pong')
})

server.get('/db', async (_req, res) => {
    queryAndUpdateSite('test').then(result => {
        if (typeof result === 'object') {
            res.send('Found' + result.site + ' .-> ' + result.visitors)
        } else {
            res.send('Error: ' + result)
        }
    })
})

server.listen(PORT)