import React from 'react';
import Order from './order/order'


const history = (props) => {
    var tracker = null;
    
    if (props.data && props.currentData) {
        var currentIDs = new Set()

        props.currentData.orders.forEach(el => {
            currentIDs.add(el.orderID)
        })

        var orders = []
        props.data.orders.forEach(el => {
            if (!currentIDs.has(el.orderID)) {
                orders.push(el)
            }
        });

        if (orders.length > 0) {
            tracker = 
                <div>
                    <h1>Order History</h1>
                    {orders.reverse().map((data, index) => {
                        return (
                            <Order
                                key={index} 
                                data={data} 
                                makeFavoriteButtonClicked={() => props.makeFavoriteButtonClicked(data.orderID)}
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

export default history;
