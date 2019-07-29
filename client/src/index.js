import React, { useState } from "react";
import ReactDOM from "react-dom";
import Shedule from "./shedule"
import AddOrderForm from './add_order_form'
import OrderTable from './order_table'

const Index = () => {
  const [orders, setOrders] = useState([])
  return (
    <div>
      <div className="header">
        <h1>Welcome to the example task!</h1>
      </div>
      <div className="input-orders">
        <h1>Input orders</h1>
        <AddOrderForm onAddOrder={order => setOrders(orders.concat([order]))} />
        <OrderTable orders={orders} />
      </div>
      <div className="result-table">
        <h1>Result table</h1>
        <Shedule />
      </div>
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));
