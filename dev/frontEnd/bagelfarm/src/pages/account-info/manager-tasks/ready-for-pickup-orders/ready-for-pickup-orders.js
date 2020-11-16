import React from 'react'
import Order from '../order/order'


const readyForPickupOrders = (props) => {
    var readyForPickupOrders = null

    if (props.data != null) {
        readyForPickupOrders = 
        <div>
            <h1>Orders Ready for Pickup</h1>
            {props.data.length === 0 ? <div><strong>None</strong></div> :
            props.data.map((data, index) => {
                return (
                    <Order 
                        key={index} 
                        data={data}
                        ready={props.ready}
                        text={"Order Picked Up"}
                        showDetailsID={props.detailsOpen === data.orderID}
                        showDetails={() => props.showDetails(data.orderID)}
                        hideDetails={props.hideDetails}
                        update={() => props.update(data.orderID)}
                        donate={() => props.donate(data.orderID)}/>
                )}
            )}
        </div>
    }
    

    return readyForPickupOrders
}

export default readyForPickupOrders;