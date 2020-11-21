import React from 'react';
import classes from './order-additions.module.css'
import Button from '../../../../../../components/UI/ButtonRelative/ButtonRelative'

const orderAddition = (props) => {
    console.log(props)
    var orderItem = null

    if (props.data) {
        orderItem =
            <div>
                <div className={classes.OrderSelections}>
                    <h3>{props.data.name} {props.data.category === "bagel" ? props.data.category : null}</h3>
                    {props.data.category === "bagel" ? 
                        <Button clicked={props.addExtrasButtonClicked} btnType="AddExtrasButton">Add Extras</Button> : null
                    }
                </div>
                {props.extrasSelected ? 
                    <div>
                        THIS WAS SELECTED!!
                    </div> : null}
            </div>
            
    }

    return orderItem;
}

export default orderAddition;