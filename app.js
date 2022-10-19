const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const port = 8000

const app = express()

app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'Visitor'
  })
})

app.get('/register', (request, response) => {
  response.render('register')
})

app.get('/login', (request, response) => {
  response.render('login')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
