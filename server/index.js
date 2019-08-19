const express = require('express');
const app = express();
const moment = require('moment');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const exampleData = require('../data/tracking.json');

app.get('/', (req, res) => {
  // TODO(Task 1): Split tracking data into trip segments for example by using the time property.
  let trackingData = {};
  for (let index = 0; index < exampleData.length; index++) {
    const singleData = exampleData[index];
    let date = moment(singleData.time);
    if (Object.keys(trackingData).length === 0) trackingData[date] = [singleData];
    else {
      let dates = Object.keys(trackingData);
      let lastDate = moment(dates[dates.length - 1]);
      if (lastDate.diff(date, 'minutes') > 60) {
        trackingData[date] = [singleData];
      } else trackingData[lastDate].push(singleData);
    }
  }
  res.send(trackingData);
});

app.get('/location/:when', (req, res) => {
  // TODO(Task 2): Return the tracking data closest to `req.params.when` from `exampleData`.
  res.send({});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
