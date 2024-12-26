const express = require('express')
const app = express()
const private1Port = 1001

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/inside1.js')
})

app.get('/inside2', (req, res) => {
    res.sendFile(__dirname + '/inside2.js')
})


app.listen(private1Port, () => {
    console.log(`Listening on ${private1Port}`)
})