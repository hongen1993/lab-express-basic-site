const express = require('express')
const hbs = require('hbs')

const PORT = 3000
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) =>
    res.render('home')
)

app.get('/about', (req, res) =>
    res.render('about')
)

app.get('/works', (req, res) =>
    res.render('works')
)

app.get('/gallery', (req, res) =>
    res.render('gallery')
)

app.all('*', (req, res) =>
    res.render('page404')
)

app.listen(PORT, () =>
    console.log(`Listening in port: ${PORT}`)
)