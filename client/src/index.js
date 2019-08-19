import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './map_component';
import { DatePicker, Slider, Button, message } from 'antd';
import moment from 'moment';
import axios from 'axios';
import 'antd/dist/antd.css';
import './styles.css';

const Index = () => {
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [chosenDate, setChosenDate] = useState();

  const onDateChange = e => {
    setDate(moment(e));
  };

  const onHourChange = e => {
    setHour(e);
  };

  const onConfirm = () => {
    if (!date) return message.error('You have to pick a date');
    if (!hour) return message.error('You have to pick an hour');
    date.set({ hour: hour + 2, minute: 0, second: 0, millisecond: 0 });

    axios
      .get('http://localhost:3000/location/' + date.toDate())
      .then(response => {
        setChosenDate(response.data);
      })
      .catch(err => {
        message.error(err.response.data.message);
      });
  };

  return (
    <div>
      <div className='header'>
        <h1>Welcome to the example task!</h1>
      </div>
      <DatePicker onChange={onDateChange} />
      <Slider min={0} step={1} max={23} defaultValue={0} onChange={onHourChange} />
      <Button type='primary' icon='search' onClick={onConfirm}>
        Search
      </Button>
      {/* TODO(Task 2): Add a slider to select datetime in the past.
        Pass the selected value as prop to the MapContainer */}
      <MapComponent chosenDate={chosenDate} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('main-container'));
