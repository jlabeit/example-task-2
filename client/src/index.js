import React,
{
  useState,
  useEffect
} from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './map_component';
import './styles.css';
import Datetime from 'react-datetime';
import  'react-datetime/css/react-datetime.css';
import Moment from 'moment';

const Index = () => {
  
  
  const getData = (date) => {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      setDate(JSON.parse(xhr.responseText));
    })
    // open the request with the verb and the url
    xhr.open('GET', `http://localhost:3000/location/${Moment(date).unix()}`);
    // send the request
    xhr.send();
  }
  const handleDateChange = (value) => {
    getData(value._d);
  }
  const [data, setDate] = useState();
  
  useEffect(() => {
  }, [data, setDate])
  return (
    <div>
      <div className='header'>
        <h1>Welcome to the example task!</h1>
      </div>
      {/* TODO(Task 2): Add a slider to select datetime in the past.
        Pass the selected value as prop to the MapContainer */ }
        <Datetime
          onChange = {handleDateChange}
        />
      <MapComponent nearLocation={data}/>
    </div>)
}

ReactDOM.render(<Index />, document.getElementById('main-container'))
