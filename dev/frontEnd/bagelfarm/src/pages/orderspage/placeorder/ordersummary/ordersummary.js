import React from 'react';

import classes from './ordersummary.module.css';
import SelectedOrders from './selectedorders/selectedorders'
import OrderConfirmation from './orderconfirmation/orderconfirmation'

const orderSummary = (props) => {
    var summary = null;

    summary =
        <div className={classes.Summary}>
            <SelectedOrders 
                items={props.selectedItems}
                totalAmount={props.totalAmount}/>
            <OrderConfirmation 
                pickupTimeForm={props.pickupTimeForm}
                changed={props.pickupTimeChanged}
                orderButtonClicked={props.orderButtonClicked}
                errorDisplayText={props.errorDisplayText}
                displayConfirmOrder={props.displayConfirmOrder}
                submitButtonClicked={props.submitButtonClicked}
                cancelButtonClicked={props.cancelButtonClicked}/>
        </div>

    return summary;
}

export default orderSummary;