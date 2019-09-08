const data = require('./tracking.json')

const strToDate = (str) => {
    const date = new Date(str.time)
    return date
}

const newData = (data) => {
    const segments = []
    let segment = []
    // assign the first object's time
    let firstPoint = data[0]
    for (let i = 1; i < data.length; i++) {
        let currentPoint = strToDate(data[i])
        // if difftime > 90 mins
        let diffTime = (strToDate(firstPoint) - currentPoint) / (60 * 1000);
        if (diffTime > 90) {
            // insert the first Point at the beginning
            segment.unshift(firstPoint)

            if (segment.length < 2) { // every trip at least should've 2 points
                segments[segments.length - 1].push(segment[0])
            } else {
                segments.push(segment)
            }
            // assign new object to start with
            firstPoint = data[i]
            segment = [] // free segment arrays
        } else {
            segment.push(data[i])
        }
    }
    return segments;
}
module.exports = newData(data)
