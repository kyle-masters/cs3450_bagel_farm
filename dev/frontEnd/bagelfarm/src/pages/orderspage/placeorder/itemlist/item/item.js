import React from 'react';
import {money} from '../../../../../helpers'
import classes from './item.module.css';
import QuantityToggle from './quantitytoggle/quantitytoggle'
import Button from '../../../../../components/UI/ButtonRelative/ButtonRelative'

const item = (props) => {
    var itemBox = null;

    if (props.data) {
        itemBox = 
            <div className={classes.Item}>
                {props.extra ? 
                <h3 className={classes.Name}>{props.data.name} {props.data.category}</h3> :
                <h3 className={classes.Name}>{props.data.name} {props.data.category === "bagel" ? props.data.category : null}</h3> }
                <h4>{money.format(props.data.price)}</h4>
                {props.extra ? 
                <Button clicked={props.addRemoveExtrasButtonClicked} btnType={"Extras"}>{props.extraAdd ? "Add" : "Remove"}</Button> : 
                <QuantityToggle 
                    qty={props.data.qty.length}
                    toggleUp={props.toggleUp}
                    toggleDown={props.toggleDown}/>
                }
            </div>
    }

    return itemBox;
}

export default item;