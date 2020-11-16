import React from 'react'
import Order from '../order/order'


const inProgressOrders = (props) => {
    var inProgressOrders = null

    if (props.data != null) {
        inProgressOrders = 
        <div>
            <h1>In Progress Orders</h1>
            {props.data.length === 0 ? <div><strong>None</strong></div> : 
            props.data.map((data, index) => {
                return (
                    <Order 
                        key={index} 
                        data={data}
                        ready={props.ready}
                        text="Move to Ready For Pickup"
                        showDetailsID={props.detailsOpen === data.orderID}
                        showDetails={() => props.showDetails(data.orderID)}
                        hideDetails={props.hideDetails}
                        update={() => props.update(data.orderID)}/>
                )}
            )}
            
        </div>
    }
    

    return inProgressOrders
}

export default inProgressOrders;