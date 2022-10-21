import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import search from './router.js'

const app = express()

app.use(bodyParser.json())
app.get('/', (req, res) => {
    //building index page form
    res.send(`
    <form action="/search">
    <label for="artist"> Artist: </label><br />
    <input type="text" name="artist" id="artistname" required><br />
    <label for="saveas"> Save as: </label><br />
    <input type="text" name="saveas" id="saveas" required>
    
    <input type="submit" value="Submit">
    </form>
    `)
})

app.use('/search', search)

app.listen(process.env.PORT, () => {
    console.log(`Listen on port https://localhost:${process.env.PORT}`)
})
