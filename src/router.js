import { Router } from 'express'
import axios from 'axios'
import path from 'path'
import 'dotenv/config'
import { test } from './convertToCsv.js'
import artists from './dictionary.json' assert { type: 'json' }

const search = Router()

search.get('/', async (req, res) => {
    const artistName = req.query.artist
    const saveas = req.query.saveas
    const endpoint = `?method=artist.search&artist=${artistName}&api_key=${process.env.API_KEY}&format=json`
    axios
        .get(process.env.ROOTURL + endpoint)
        .then((response) => test(response, saveas))
        .catch((error) => test(artists, saveas))
    res.status(200).send(`Data saved in ${path.resolve(`test/${saveas}`)}`)
})

export default search
