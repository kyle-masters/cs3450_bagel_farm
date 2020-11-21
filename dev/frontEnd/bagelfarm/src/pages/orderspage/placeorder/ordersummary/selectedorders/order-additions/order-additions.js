import React from 'react';
import classes from './order-additions.module.css'
import Button from '../../../../../../components/UI/ButtonRelative/ButtonRelative'
import OrderExtras from './order-extras/order-extras'

const orderAddition = (props) => {
    var orderItem = null

    if (props.data) {
        orderItem =
            <div>
                <div className={classes.OrderSelections}>
                    <h3>{props.data.name} {props.data.category === "bagel" ? props.data.category : null}</h3>
                    {props.data.category === "bagel" ? 
                        <Button clicked={props.addExtrasButtonClicked} btnType="AddExtrasButton">{props.extrasSelected ? "Save" : "Add Extras"}</Button> : null
                    }
                </div>
                {props.extrasSelected ? 
                    <OrderExtras 
                        addRemoveExtrasButtonClicked={props.addRemoveExtrasButtonClicked}
                        selectedData={props.data}
                        data={props.itemSelections}
                        selected={null}/> : 
                    <div className={classes.AddOns}>
                        {props.data.qty[props.data.refID].map((element, idx) => {
                            return <h4 key={idx}>{element.name + " " + element.category}</h4>
                        })}
                    </div>}
            </div> 
    }

    return orderItem;
}

export default orderAddition;