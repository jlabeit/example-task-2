import React from 'react'
import Moment from 'moment'

const OrderTable = ({
    orders
}) => {
    return (
        <table className="orders-table">
            <thead>
              <tr>
                <th>Start</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
                {orders.map(({ start, duration }, i) => (
                <tr key={i}>
                    <td>{Moment(start).format('HH:mm (DD.MM)')}</td>
                    <td>{duration} minutes</td>
                </tr>)
                )}
            </tbody>
        </table>
    )
}
export default OrderTable