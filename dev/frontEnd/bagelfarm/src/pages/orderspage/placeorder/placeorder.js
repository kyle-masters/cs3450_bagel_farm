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
                    totalAmount={props.totalOrderAmount}
                    selectedItems={props.selectedItems}/>
            </div>
        </div>
    )
}

export default orderPlacement;
