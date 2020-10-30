import React from 'react';
import OrderTracker from './ordertracker/ordertracker'

const current = (props) => {
    var tracker = null;
    
    if (props.data) {
        if (props.data.orders.length > 0) {
            tracker = 
                <div>
                    <h1>Order Status</h1>
                    {props.data.orders.map((data, index) => {
                        return (
                            <OrderTracker 
                                key={index} 
                                data={data} 
                                showDetailsID={props.detailsOpen === data.orderID}
                                showDetails={() => props.showDetails(data.orderID)}
                                hideDetails={props.hideDetails}/>
                        )}
                    )}
                </div>
        } 
    }

    return tracker;
}

export default current;
