import React from 'react';
import classes from './order-extras.module.css'

const orderExtras = (props) => {
    var orderExtra = null

    if (props.data) {
        orderExtra =
            <div>
                Extras
            </div>
    }

    return orderExtra;

}

export default orderExtras;