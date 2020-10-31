import React from 'react';
import {dateTime, money} from '../../../helpers'

const orderDetails = (props) => {
    var statusMap = {1: 'Order Placed', 2: 'In Progress', 3: 'Ready for Pickup', 4: 'Picked up', 5: 'Donated'}
    return(
        <div>
            {props.items.map((element, index) => {
                return(
                    <div key={index}>
                        <h3>{element.name}</h3>
                        <h4>{"Quantity: " + element.quantity}</h4>
                        <h4>{"Price: " + money.format(parseFloat(element.price) * element.quantity)}</h4>
                    </div>
                )
            })}
            <h3>Total Price: {money.format(props.price)}</h3>
            <h3>Status: {statusMap[props.status]}</h3>
            <h3>Ordered: {dateTime(props.orderTime)}</h3>
            <h3>Pickup Time: <strong>{dateTime(props.pickupTime)}</strong></h3>
        </div>
    )
}

export default orderDetails;