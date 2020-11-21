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
                    extrasSelected={props.extrasSelected}
                    addExtrasButtonClicked={props.addExtrasButtonClicked}
                    totalAmount={props.totalOrderAmount}
                    selectedItems={props.selectedItems}
                    pickupTimeForm={props.pickupTimeForm}
                    pickupTimeChanged={props.pickupTimeChanged}
                    orderButtonClicked={props.orderButtonClicked}
                    errorDisplayText={props.errorDisplayText}
                    displayConfirmOrder={props.displayConfirmOrder}
                    submitButtonClicked={props.submitButtonClicked}
                    cancelButtonClicked={props.cancelButtonClicked}/>
            </div>
        </div>
    )
}

export default orderPlacement;
