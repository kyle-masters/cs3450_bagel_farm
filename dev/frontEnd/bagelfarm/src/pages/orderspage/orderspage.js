import React, {Component} from 'react';
import axios from '../../axios-main'
import History from './history/history';
import Current from './current/current';
import PlaceOrder from './placeorder/placeorder'
import classes from './orderspage.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'


class OrdersPage extends Component {
    state = {
        currentOrders: null,
        orderHistory: null,
        inventory: null,
        detailsOpen: null,
        userData: {
            'balance': null,
            'rewardPoints': null,
        },
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
        subTotal: 0,
        pointsTotal: 0,
        selectedItems: [],
        errorDisplayText: "",
        displayConfirmOrder: false,
        updateItems: false,
        spinner: false,
        selectedItemExtrasActive: null,
        discountSelected: false,
        discountError: false
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
            el.qty = []
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

    pickupTimeChangedHandler = (event) => {
        const updatedPickupTime = {
            ...this.state.pickupTimeForm
        };
        updatedPickupTime.value = event.target.value;
        this.setState({
            pickupTimeForm: updatedPickupTime
        })
    }

    toggleUpHandler = (id) => {
        var itemSelections = [...this.state.itemSelections]
        itemSelections.forEach((el, idx) => {
            itemSelections[idx] = {...this.state.itemSelections[idx]}
        })
        itemSelections.forEach((el) => {
            if (el.id === id) {
                el.qty.push([])
            }
        })
        this.setState({
            itemSelections: itemSelections,
            itemSelectionsShown: this.updateItemSelectionsShown(
                this.state.searchBarForm.value, itemSelections
            ),
            orderTotal: this.getOrderTotal(itemSelections),
            subTotal: this.getSubTotal(itemSelections),
            selectedItems: this.updateItemSelectedList(itemSelections),
            selectedItemExtrasActive: null
        })
    }

    toggleDownHandler = (id) => {
        var itemSelections = [...this.state.itemSelections]
        itemSelections.forEach((el, idx) => {
            itemSelections[idx] = {...this.state.itemSelections[idx]}
        })

        var item = null

        itemSelections.forEach((el) => {
            if (el.id === id) {
                if (el.qty.length > 0) {
                    item = el.qty.pop()
                }
            }
        })

        if (item) {
            item.forEach((element) => {
                itemSelections.forEach((value) => {
                    if (element.name === value.name && element.category === value.category) {
                        value.qty.pop()
                    }
                })
            })
        }

        this.setState({
            itemSelections: itemSelections,
            itemSelectionsShown: this.updateItemSelectionsShown(
                this.state.searchBarForm.value, itemSelections
            ),
            orderTotal: this.getOrderTotal(itemSelections),
            subTotal: this.getSubTotal(itemSelections),
            selectedItems: this.updateItemSelectedList(itemSelections),
            selectedItemExtrasActive: null
        })
    }

    addExtrasButtonClickedHandler = (name) => {
        if (this.state.selectedItemExtrasActive === (name)) {
            this.setState({selectedItemExtrasActive: null})
        } else {
            this.setState({selectedItemExtrasActive: (name)})
        }
    }

    addRemoveExtrasButtonClickedHandler = (el, name, buttonState) => {
        const nameSplit = name.split('_')
        const item = nameSplit[0]
        const idx = parseInt(nameSplit[1])
        var itemSelections = [...this.state.itemSelections]
        itemSelections.forEach((value, idx) => {
            itemSelections[idx] = {...this.state.itemSelections[idx]}
        })

        if (buttonState) {
            itemSelections.forEach((element) => {
                if (element.id === el.id) {
                    element.qty.push([])
                }
    
                if (element.name === item && element.category === "bagel" ) {
                    const copiedEl = {...el}
                    element.qty[idx].push(copiedEl)
                }
            })
        } else {
            itemSelections.forEach((element) => {
                if (element.id === el.id) {
                    if (el.qty.length > 0) {
                        el.qty.pop()
                    }
                }
    
                if (element.name === item && element.category === "bagel" ) {
                    var index = null
                    element.qty[idx].forEach((value, idx) => {
                        if (value.name === el.name && value.category === el.category) {
                             index = idx
                        }
                    })
                    element.qty[idx].splice(index, 1)
                }
            })
        }
        

        this.setState({
            itemSelections: itemSelections,
            itemSelectionsShown: this.updateItemSelectionsShown(
                this.state.searchBarForm.value, itemSelections
            ),
            orderTotal: this.getOrderTotal(itemSelections),
            subTotal: this.getSubTotal(itemSelections),
            selectedItems: this.updateItemSelectedList(itemSelections),
        })
    }

    orderButtonClickedHandler = () => {
        var errorText = "";
        if (this.state.pickupTimeForm.value === "") {
            errorText = "Please enter a desired pickup time"
        }
        if (this.state.selectedItems.length <= 0) {
            errorText = "No items are selected"
        }
        if (errorText === "") {
            this.setState({
                displayConfirmOrder: true,
                errorDisplayText: ""
            })
        } else {
            this.setState({errorDisplayText: errorText})
        }
    }

    submitButtonClickedHandler = () => {
        this.setState({spinner: true})
        axios.get("/order?id=" + this.props.getID() + "&cost=" + this.state.orderTotal + "&" + this.getItemOrderString() + "&points=" + this.state.pointsTotal)
            .then((response) => {
                this.setState({updateItems: true})
            })
    }

    cancelButtonClickedHandler = () => {
        this.setState({displayConfirmOrder: false})
    }

    discountButtonClicked = () => {
        var ds = !this.state.discountSelected;
        axios.get('/account?id=' + this.props.getID())
        .then((response) => {
            const data = response.data
            this.setState({
                userData: {
                    'balance': data['balance'],
                    'rewardPoints': data['rewards']},
                discountSelected: ds,
                discountError: false
                })
            })
    }

    updatePointsUsed = (points) => {
        var itemSelections = [...this.state.itemSelections]
        if(points / 100 <= this.state.subTotal && points < parseFloat(this.state.userData['rewardPoints'])) {
            this.setState({pointsTotal: points, discountError: false}, function () {
                this.setState({orderTotal: this.getOrderTotal(itemSelections)});
            });
        } else {
            this.setState({discountError: true})
        }
    }

    getItemOrderString = () => {
        var orderString = ""
        var bigCount = 0
        this.state.selectedItems.forEach(el => {
            bigCount += 1
            var smallCount = 1
            orderString += ("item_" + bigCount + "_" + smallCount + "=" + el.id + "&")
            el.qty[el.refID].forEach(element => {
                smallCount += 1
                orderString += ("item_" + bigCount + "_" + smallCount + "=" + element.id + "&")
            })
            orderString += ("qty_" + bigCount + "=1&")
        })
        return orderString.slice(0, -1);
    }

    getOrderTotal = (itemSelections) => {
        var totalAmount = 0.0;
        itemSelections.forEach(el => {
            totalAmount += el.qty.length * parseFloat(el.price)
        })
        return totalAmount - (this.state.pointsTotal / 100);
    }

    getSubTotal = (itemSelections) => {
        var totalAmount = 0.0;
        itemSelections.forEach(el => {
            totalAmount += el.qty.length * parseFloat(el.price)
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
            if (el.category === "bagel" || el.category === "beverage") {
                if (el.qty.length > 0) {
                    for (var i = 0; i < el.qty.length; i++) {
                        el = {...el}
                        el.refID = i
                        selectedItems.push(el)
                    }
                }
            } 
        })
        return selectedItems;
    }

    resetState = () => {
        axios.get('/account?id=' + this.props.getID())
        .then((response) => {
            const data = response.data
            this.setState({
                userData: {
                    'balance': data['balance'],
                    'rewardPoints': data['rewards'],
                },
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
                            placeholder: 'Pickup time'
                        },
                        value: "",
                        label: 'Pickup time'
                },
                itemSelections: null,
                itemSelectionsShown: null,
                orderTotal: 0,
                subTotal: 0,
                selectedItems: [],
                errorDisplayText: "",
                displayConfirmOrder: false,
                updateItems: false,
                discountSelected: false,
                discountError: false,
                spinner: false})
                this.getData();
            })
    }

    render() {
        console.log(this.state.subTotal)
        var ordersPage =
            <div className={classes.OrdersPage}>
                <Current 
                    data={this.state.currentOrders} 
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
                <PlaceOrder 
                    data={this.state.inventory}
                    discountSelected={this.state.discountSelected}
                    itemSelections={this.state.itemSelectionsShown}
                    searchBarForm={this.state.searchBarForm}
                    searchBarChanged={this.searchBarChangedHandler}
                    toggleUp={this.toggleUpHandler}
                    toggleDown={this.toggleDownHandler}
                    addExtrasButtonClicked={this.addExtrasButtonClickedHandler}
                    extrasSelected={this.state.selectedItemExtrasActive}
                    addRemoveExtrasButtonClicked={this.addRemoveExtrasButtonClickedHandler}
                    totalOrderAmount={this.state.orderTotal}
                    subtotal={this.state.subTotal}
                    selectedItems={this.state.selectedItems}
                    pickupTimeForm={this.state.pickupTimeForm}
                    pickupTimeChanged={this.pickupTimeChangedHandler}
                    orderButtonClicked={this.orderButtonClickedHandler}
                    errorDisplayText={this.state.errorDisplayText}
                    displayConfirmOrder={this.state.displayConfirmOrder}
                    submitButtonClicked={this.submitButtonClickedHandler}
                    cancelButtonClicked={this.cancelButtonClickedHandler}
                    discountButtonClicked={this.discountButtonClicked}
                    userBalance={this.state.userData['balance']}
                    userRewards={this.state.userData['rewardPoints']}
                    updatePointsUsed={this.updatePointsUsed}
                    pointsTotal={this.state.pointsTotal}
                    discountError={this.state.discountError}/>
                <History 
                    currentData={this.state.currentOrders}
                    data={this.state.orderHistory} 
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
            </div>
        
        if (this.state.spinner) {
            ordersPage = <Spinner />
        }

        return ordersPage;
    }
}

export default OrdersPage;
