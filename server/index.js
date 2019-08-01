const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const exampleData = require('../data/tracking.json')


app.get('/', (req, res) => {
  res.send(exampleData)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
