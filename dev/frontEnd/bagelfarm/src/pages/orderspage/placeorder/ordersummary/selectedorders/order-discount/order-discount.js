import React from 'react';
import {money} from '../../../../../../helpers'
import classes from './order-discount.module.css';
import Button from '../../../../../../components/UI/ButtonRelative/ButtonRelative'

const orderDiscount = (props) => {
    var discount = null

    discount =
        <div>
            <div>
                <Button clicked={props.discountButtonClicked} 
                        btnType="DiscountButton">Discounts: {money.format(props.pointsTotal / 100)}</Button>
            </div>
            {props.discountSelected ?
            <div className={classes.Input}>
                <h3>Apply Rewards: (100 points = $1.00 off)</h3>
                <h3>You currently have {props.userRewards} rewards points</h3>
                <input type="number" value={props.pointsTotal} min="0" max={props.userRewards} step="100" onChange={event => props.updatePointsUsed(event.target.value)}/>
            </div>
            : <></>}
        </div>
    
    return discount;
}

export default orderDiscount;