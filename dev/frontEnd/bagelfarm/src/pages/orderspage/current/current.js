import React from 'react';
import CurrentOrder from '../order/order'

const current = (props) => {
    if (props.data) {
        return(
            props.data.orders.map((data, index) => {
                return (
                    <CurrentOrder
                        data={data}
                        key={index}/>
                )}
            ) 
        ) 
    } else {
        return null
    }  
}

export default current;
