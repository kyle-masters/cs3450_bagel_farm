import React from 'react';

import classes from './ordersummary.module.css';
import SelectedOrders from './selectedorders/selectedorders'

const orderSummary = (props) => {
    var summary = null;

    summary =
        <div className={classes.Summary}>
            <SelectedOrders 
                items={props.selectedItems}
                totalAmount={props.totalAmount}/>
        </div>

    return summary;
}

export default orderSummary;