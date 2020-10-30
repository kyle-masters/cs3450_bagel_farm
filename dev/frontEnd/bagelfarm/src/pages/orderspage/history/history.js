import React from 'react';
import Order from '../order/order'


const history = (props) => {
    if (props.data) {
        return(
            props.data.orders.map((data, index) => {
                return (
                    <Order
                        data={data}
                        key={index}/>
                )}
            ) 
        ) 
    } else {
        return null
    }
}

export default history;
