import React from 'react';
import SearchBar from './searchbar/searchbar'
import ItemList from './itemlist/itemlist'
import OrderSummary from './ordersummary/ordersummary'
import classes from './placeorder.module.css'

const orderPlacement = (props) => {
    return(
        <div>
            <h1>Place An Order</h1>
            <div className={classes.PlaceOrder}>
                <SearchBar 
                    searchBarForm={props.searchBarForm}
                    changed={props.searchBarChanged}/>
                <ItemList 
                    data={props.itemSelections}
                    toggleUp={props.toggleUp}
                    toggleDown={props.toggleDown}/>
                <OrderSummary
                    discountButtonClicked={props.discountButtonClicked}
                    discountSelected={props.discountSelected}
                    addRemoveExtrasButtonClicked={props.addRemoveExtrasButtonClicked}
                    itemSelections={props.itemSelections}
                    extrasSelected={props.extrasSelected}
                    addExtrasButtonClicked={props.addExtrasButtonClicked}
                    totalAmount={props.totalOrderAmount}
                    subtotal={props.subtotal}
                    selectedItems={props.selectedItems}
                    pickupTimeForm={props.pickupTimeForm}
                    pickupTimeChanged={props.pickupTimeChanged}
                    orderButtonClicked={props.orderButtonClicked}
                    errorDisplayText={props.errorDisplayText}
                    displayConfirmOrder={props.displayConfirmOrder}
                    submitButtonClicked={props.submitButtonClicked}
                    cancelButtonClicked={props.cancelButtonClicked}
                    userBalance={props.userBalance}
                    userRewards={props.userRewards}
                    updatePointsUsed={props.updatePointsUsed}
                    pointsTotal={props.pointsTotal}
                    discountError={props.discountError}/>
            </div>
        </div>
    )
}

export default orderPlacement;
