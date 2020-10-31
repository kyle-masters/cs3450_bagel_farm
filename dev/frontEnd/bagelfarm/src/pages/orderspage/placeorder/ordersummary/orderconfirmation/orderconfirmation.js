import React from 'react';
import classes from './orderconfirmation.module.css'
import Input from '../../../../../components/UI/Input/Input'
import Button from '../../../../../components/UI/ButtonRelative/ButtonRelative'

const orderConfirmation = (props) => {
    var confirmation = null;

    if (props.pickupTimeForm) {
        var formElement = props.pickupTimeForm;

        confirmation =
            <div>    
                {props.displayConfirmOrder ? 
                    <div className={classes.FinalConfirmation}>
                        <h2>Does everything look right?</h2>
                        <div className={classes.ConfirmationButtons}>
                            <Button clicked={props.cancelButtonClicked}>Cancel</Button>
                            <Button clicked={props.submitButtonClicked}>Submit Order</Button>
                        </div>
                    </div> : 
                    <div className={classes.Confirmation}>
                        <div className={classes.Pickup}>
                            <h3>Pickup Time</h3>
                            <form className={classes.Form} onSubmit={props.submitHandler}>
                                <Input
                                    elementType={formElement.elementType}
                                    elementConfig={formElement.elementConfig}
                                    value={formElement.value}
                                    changed={(event) => props.changed(event)}
                                    />
                            </form>
                        </div>
                        <div className={classes.Button}>
                            <Button clicked={props.orderButtonClicked} btnType="OrderButton">Place Order</Button>
                            <h3>{props.errorDisplayText}</h3>
                        </div>
                    </div>}
            </div>
    }

    return confirmation;
}

export default orderConfirmation;