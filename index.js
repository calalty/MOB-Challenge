const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const fileUpload = require('express-fileupload');

app.use(fileUpload())

app.get('/', async (req, res) => {
    res.render('index')
})

app.post('/upload', async(req, res) => {
    console.log(); // the uploaded file object
  });

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
// takes everything as a string
app.use(bodyParser.json());

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', async(req, res) => {
    res.render('index')
})

app.post('/upload', async (req, res) => {
    let files = req.files.foo
    res.render('upload', {files});
})




app.listen(3000, () => {
    console.log('server running')
})