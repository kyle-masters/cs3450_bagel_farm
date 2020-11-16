import React from 'react'
import Order from '../order/order'


const placedOrders = (props) => {
    var placedOrders = null

    if (props.data != null) {
        placedOrders = 
        <div>
            <h1>Placed Orders</h1>
            {props.data.length === 0 ? <div><strong>None</strong></div> : 
            props.data.map((data, index) => {
                return (
                    <Order 
                        key={index} 
                        data={data}
                        ready={props.ready}
                        text={"Move to In Progress"}
                        showDetailsID={props.detailsOpen === data.orderID}
                        showDetails={() => props.showDetails(data.orderID)}
                        hideDetails={props.hideDetails}
                        update={() => props.update(data.orderID)}/>
                )}
            )}
        </div>
    }
    

    return placedOrders
}

export default placedOrders;