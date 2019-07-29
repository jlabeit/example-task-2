import React, { useState, useEffect } from 'react'
import Moment from 'moment'

const fetchData = async () => {
  const response = await fetch('http://localhost:3000')
  return await response.json()
}

const Shedule = () => {
  const [shedule, setShedule] = useState([])
  useEffect(() => {
    fetchData().then(data => setShedule(data))
  }, [])
  return (
    <table className="shedule">
      <thead>
        <tr>
          <th>Type</th>
          <th>Start</th> 
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {shedule.map(({ type, start, duration }, i) => (
          <tr key={i}>
            <td>{type}</td>
            <td>{Moment(start).format('HH:mm (DD.MM)')}</td>
            <td>{duration} minutes</td>
          </tr>)
        )}
      </tbody>
    </table>)
  }

export default Shedule