import React, {Component} from 'react';
import axios from '../../axios-main'
import History from './history/history';
import Current from './current/current';
import PlaceOrder from './placeorder/placeorder'
import classes from './orderspage.module.css'


class OrdersPage extends Component {
    state = {
        currentOrders: null,
        orderHistory: null,
        inventory: null,
        detailsOpen: null,
        searchBarForm: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Search Items...'
            },
            value: "",
            label: 'Search'
        },
        pickupTimeForm: {
            elementType: 'input',
                elementConfig: {
                    type: 'datetime-local',
                    placeholder: 'First Name'
                },
                value: "",
                label: 'First Name'
        },
        itemSelections: null,
        itemSelectionsShown: null,
        orderTotal: 0,
        selectedItems: []
    }

    componentDidMount() {
        axios.get('/history?id=' + this.props.getID())
            .then((response) => {
                this.setState({orderHistory: response.data})
            })
        axios.get('/inventory') 
            .then((response) => {
                this.setState({inventory: response.data.inventory})
                this.updateItemSelections(response.data.inventory)
            })
        axios.get('/status?id=' + this.props.getID())
            .then((response) => {
                this.setState({currentOrders: response.data})
            })
    }

    updateItemSelections = (inventory) => {
        var updatedInventory = [...inventory]
        updatedInventory.forEach((el, idx) => {
            updatedInventory[idx] = {...inventory[idx]}
        })  
        updatedInventory.forEach((el) => {
            el.qty = 0
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

    showDetails = (id) => {
        this.setState({detailsOpen: id})
    }

    hideDetails = () => {
        this.setState({detailsOpen: null})
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

    toggleUpHandler = (id) => {
        var itemSelections = [...this.state.itemSelections]
        itemSelections.forEach((el, idx) => {
            itemSelections[idx] = {...this.state.itemSelections[idx]}
        })
        itemSelections.forEach((el) => {
            if (el.id === id) {
                el.qty += 1
            }
        })
        this.setState({
            itemSelections: itemSelections,
            itemSelectionsShown: this.updateItemSelectionsShown(
                this.state.searchBarForm.value, itemSelections
            ),
            orderTotal: this.getOrderTotal(itemSelections),
            selectedItems: this.updateItemSelectedList(itemSelections)
        })
    }

    toggleDownHandler = (id) => {
        var itemSelections = [...this.state.itemSelections]
        itemSelections.forEach((el, idx) => {
            itemSelections[idx] = {...this.state.itemSelections[idx]}
        })
        itemSelections.forEach((el) => {
            if (el.id === id) {
                if (el.qty > 0) {
                    el.qty -= 1
                }
            }
        })
        this.setState({
            itemSelections: itemSelections,
            itemSelectionsShown: this.updateItemSelectionsShown(
                this.state.searchBarForm.value, itemSelections
            ),
            orderTotal: this.getOrderTotal(itemSelections),
            selectedItems: this.updateItemSelectedList(itemSelections)
        })
    }

    getOrderTotal = (itemSelections) => {
        var totalAmount = 0.0;
        itemSelections.forEach(el => {
            totalAmount += el.qty * parseFloat(el.price)
        })
        return totalAmount;
    }

    updateItemSelectedList = (itemSelectionsValue) => {
        var itemSelections = [...itemSelectionsValue]
        itemSelections.forEach((el, idx) => {
            itemSelections[idx] = {...itemSelectionsValue[idx]}
        })
        var selectedItems = []
        itemSelections.forEach((el) => {
            if (el.qty > 0) {
                selectedItems.push(el)
            }
        })
        return selectedItems;
    }

    render() {
        console.log(this.state)
        return (
            <div className={classes.OrdersPage}>
                <Current 
                    data={this.state.currentOrders} 
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
                <PlaceOrder 
                    data={this.state.inventory}
                    itemSelections={this.state.itemSelectionsShown}
                    searchBarForm={this.state.searchBarForm}
                    searchBarChanged={this.searchBarChangedHandler}
                    toggleUp={this.toggleUpHandler}
                    toggleDown={this.toggleDownHandler}
                    totalOrderAmount={this.state.orderTotal}
                    selectedItems={this.state.selectedItems}/>
                <History 
                    currentData={this.state.currentOrders}
                    data={this.state.orderHistory} 
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
            </div>
        )
    }
}

export default OrdersPage;
