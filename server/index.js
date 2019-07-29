const express = require('express')
const app = express()
const Moment = require('moment')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dummyShedule = [{
  type: 'DRIVING',
  start: Moment(),
  duration: 4.5 * 60,
}, {
  type: 'BREAK',
  start: Moment().add(4.5, 'hours'),
  duration: 45,
}, {
  type: 'DRIVING',
  start: Moment().add(4.5, 'hours').add(45, 'minutes'),
  duration: 4.5 * 60,
}]

app.get('/', (req, res) => {
  // TODO: implement.
  res.send(dummyShedule)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
