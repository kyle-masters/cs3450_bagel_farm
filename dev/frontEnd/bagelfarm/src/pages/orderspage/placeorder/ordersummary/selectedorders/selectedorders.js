import React from 'react';
import {money} from '../../../../../helpers'
import classes from './selectedorders.module.css';
import OrderAdditions from './order-additions/order-additions'
import OrderDiscount from './order-discount/order-discount'
import Button from '../../../../../components/UI/ButtonRelative/ButtonRelative'

const selectedOrders = (props) => {
    var selected = null

    selected =
        <div className={classes.Selected}>
            <div className={classes.Orders}>
                <div className={classes.OrderSelections}>
                    <h2>Selected Items</h2>
                </div>
                {props.items.length >= 1 ? props.items.map((el, idx) => {
                    return (
                        <OrderAdditions
                            addExtrasButtonClicked={() => props.addExtrasButtonClicked(el.name + "_" + el.refID)}
                            extrasSelected={props.extrasSelected === (el.name + "_" + el.refID)}
                            addRemoveExtrasButtonClicked={props.addRemoveExtrasButtonClicked}
                            itemSelections={props.itemSelections}
                            data={el}
                            key={idx}
                            />
                    )
                }): <h3>No Items Selected</h3>}
            </div>
            <div className={classes.Favorite}>
                <Button clicked={props.populateFavoriteButtonClicked} disabled={!props.favoriteSet} btnType={'Favorite'}>Populate Favorite</Button>
            </div>
            <div className={classes.Total}>
                <h2>Subtotal: {money.format(props.subtotal)}</h2>
                <OrderDiscount
                    discountButtonClicked={() => props.discountButtonClicked()}
                    discountSelected={props.discountSelected}
                    userRewards={props.userRewards}
                    updatePointsUsed={props.updatePointsUsed}
                    pointsTotal={props.pointsTotal}
                    discountError={props.discountError}/>
                <h2>Total: {money.format(props.totalAmount - 0)}</h2>
            </div>
        </div>
    
    return selected;
}

export default selectedOrders;