require('dotenv').config()

import express from 'express';
import cors from 'cors';
import { queryAndUpdateSite } from './db';
import { constructResponse } from './template';

const PORT = process.env.PORT || 9000;
const server = express()

server.use(cors())

server.use(async (req, _res, next) => {
    console.info('[' + req.method + '] ' + req.url)
    next()
})

server.get('/ping', (_req, res) => {
    res.send('pong')
})

server.get('/visitors', async (req, res) => {
    const { site } = req.query as { site: string }

    queryAndUpdateSite(site).then(result => {
        if (typeof result === 'object') {
            res.send(constructResponse(result.visitors))
        } else {
            res.send('Error: ' + result)
        }
    })
})

server.listen(PORT)