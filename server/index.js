const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const exampleData = require('../data/tracking.json')

app.get('/', (req, res) => {
  // TODO(Task 1): Split tracking data into trip segments for example by using the time property.
  let segments = [];
  let previousSegment = Date.parse(exampleData[0].time);
  let segmentElements = [];
  exampleData.forEach((segment, index) => {
    // parse date to unix format
    const currentSegment = Date.parse(segment.time);
    // get the difference between current and previous date
    const diff = Math.ceil((previousSegment - currentSegment) / (1000 * 60));
    
    // if it's smaller than the threshold (200 minutes) then add it to the array
    if (index === 0 || diff <= 200) {
      console.log(index);
      segmentElements.push(segment);
    } else {
      console.log(index);
      segments.push(segmentElements);
      segmentElements = [];
      segmentElements.push(segment);
    }
    previousSegment = currentSegment;
  });
  segments.push(segmentElements);
  res.send(segments);
})

app.get('/location/:when', (req, res) => {
  // TODO(Task 2): Return the tracking data closest to `req.params.when` from `exampleData`.
  res.send({})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
