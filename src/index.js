import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/name/:name', (req, res) => {
    const { name } = req.params
    res.send(`hello ${name}`)
})

app.get('/edn', (req, res) => {
    res.send(edn)
})

app.post('/', (req, res) => {
    const { feeling } = req.body
    console.log(`I have this feeling: ${feeling}`)
    res.send('thank you')
})

const port = process.env.PORT || 5000
app.listen(port, (error) => {
    error && console.log(error)

    console.log(`app running @port ${port}`)
})

const edn = [
    { name: 'chris', job: 'writer' },
    { name: 'leo', job: 'writer' },
    { name: 'nacho', job: 'comediant' },

]