import React from 'react';
import SearchBar from './searchbar/searchbar'
import ItemList from './itemlist/itemlist'
import classes from './inventory.module.css'

const inventoryList = (props) => {
    return(
        <div>
            <h1>Inventory</h1>
            <div className={classes.Inventory}>
                <SearchBar 
                    searchBarForm={props.searchBarForm}
                    changed={props.searchBarChanged}/>
                <ItemList 
                    data={props.itemSelections}
                    toggleUp={props.toggleUp}
                    toggleDown={props.toggleDown}
                    restock={props.restockButtonClicked}/>
            </div>
        </div>
    )
}

export default inventoryList;
