import React from 'react'
import ReactDOM from 'react-dom'
import MapComponent from './map_component'
import './styles.css'

const Index = () => {
  return (
    <div>
      <div className='header'>
        <h1>Welcome to the example task!</h1>
      </div>
      {/* TODO(Task 2): Add a slider to select datetime in the past.
        Pass the selected value as prop to the MapContainer */ }
      <MapComponent />
    </div>)
}

ReactDOM.render(<Index />, document.getElementById('main-container'))
