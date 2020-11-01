import React, {Component} from 'react';
import axios from '../../axios-main'
import Inventory from './inventory/inventory';
import classes from './inventory-page.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'


class InventoryPage extends Component {
    state = {
        inventory: null,
        searchBarForm: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Search Items...'
            },
            value: "",
            label: 'Search'
        },
        errorDisplayText: "",
        itemSelections: null,
        itemSelectionsShown: null,
        updateItems: false,
        spinner: false
    }

    componentDidUpdate() {
        if (this.state.updateItems) {
            this.resetState()
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get('/inventory') 
            .then((response) => {
                this.setState({inventory: response.data.inventory})
                this.updateItemSelections(response.data.inventory)
            })
    }

    showDetails = (id) => {
        this.setState({detailsOpen: id})
    }

    hideDetails = () => {
        this.setState({detailsOpen: null})
    }

    updateItemSelections = (inventory) => {
        var updatedInventory = [...inventory]
        updatedInventory.forEach((el, idx) => {
            updatedInventory[idx] = {...inventory[idx]}
        })
        this.setState({
            itemSelections: updatedInventory,
            itemSelectionsShown: updatedInventory
        })
    }

    updateItemSelectionsShown = (searchString, itemSelectionsValue = this.state.itemSelections) => {
        var itemSelections = [...itemSelectionsValue]
        itemSelections.forEach((el, idx) => {
            itemSelections[idx] = {...itemSelectionsValue[idx]}
        })
        var itemSelectionsShown = []
        itemSelections.forEach((el) => {
            const name = el.name.toLowerCase() + " " + el.category.toLowerCase();
            if (name.includes(searchString.toLowerCase())) {
                itemSelectionsShown.push(el)
            }
        })
        return itemSelectionsShown;
    }

    searchBarChangedHandler = (event) => {
        const updatedSearchBox = {
            ...this.state.searchBarForm
        };
        updatedSearchBox.value = event.target.value;
        this.setState({
            searchBarForm: updatedSearchBox,
            itemSelectionsShown: this.updateItemSelectionsShown(event.target.value)
        });
    }

    resetState = () => {
        this.setState({
            inventory: null,
            searchBarForm: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Search Items...'
                },
                value: "",
                label: 'Search'
            },
            itemSelections: null,
            itemSelectionsShown: null,
            errorDisplayText: "",
            updateItems: false,
            spinner: false})
            this.getData();
    }

    render() {
        var inventoryPage =
            <div className={classes.InventoryPage}>
                <Inventory 
                    data={this.state.inventory}
                    itemSelections={this.state.itemSelectionsShown}
                    searchBarForm={this.state.searchBarForm}
                    searchBarChanged={this.searchBarChangedHandler}
                    toggleUp={this.toggleUpHandler}
                    toggleDown={this.toggleDownHandler}
                    errorDisplayText={this.state.errorDisplayText}/>
            </div>
        
        if (this.state.spinner) {
            inventoryPage = <Spinner />
        }

        return inventoryPage;
    }
}

export default InventoryPage;
