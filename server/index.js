const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// getting data segments
const exampleData = require('../data/segments')

app.get('/', (req, res) => {
  // TODO(Task 1): Split tracking data into trip segments for example by using the time property.
  res.send(exampleData)
})

app.get('/location/:when', (req, res) => {
  // TODO(Task 2): Return the tracking data closest to `req.params.when` from `exampleData`.
  const closestData = []
  const when = new Date(req.params.when)
  exampleData.map(location => {
    location.map((obj) => {
      const objDate = new Date(obj.time)
      const diffTime = Math.abs((objDate - when) / (1000 * 60)); // get absolute value
      // check if the request time (when) equal to 2 minutes close.
      if (diffTime <= 2) {
        closestData.push(obj)
      }
    })
  })
  res.send(closestData)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
