const { URL } = require('url')
const http = require('http')
const express = require('express')
const app = express()
const publicPort = 80
const private1Port = 1001

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/outside.js')
})

app.get('/ssrf', (req, res) => {
    const path = req.query.path
    if (typeof path !== 'string' || path.length === 0) {
        res.send(`<marquee>🚩🚩🚩</marquee>`)
    }
    else {
        const url = `http://localhost:${private1Port}${path}`
        const parsedUrl = new URL(url)

        if (parsedUrl.hostname !== 'localhost') {

            res.send('sorry, you can only talk to localhost')
        }
        else {

            http.get(parsedUrl.href, ssrfRes => {
                let contentType = ssrfRes.headers['content-type']

                let body = ''
                ssrfRes.on('data', chunk => {
                    body += chunk
                })

                ssrfRes.on('end', () => {
                    if (contentType) {
                        res.setHeader('Content-Type', contentType)
                    }
                    res.send(body)
                })
            }).on('error', function(e) {
                res.send("Got error: " + e.message)
            })
        }
    }
})


app.listen(publicPort, () => {
  console.log(`Listening on ${publicPort}`)
})