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
        detailsOpen: null
    }

    componentDidMount() {
        axios.get('/history?id=' + this.props.getID())
            .then((response) => {
                this.setState({orderHistory: response.data})
            })
        axios.get('/inventory') 
            .then((response) => {
                this.setState({inventory: response.data})
            })
        axios.get('/status?id=' + this.props.getID())
            .then((response) => {
                this.setState({currentOrders: response.data})
            })
    }

    showDetails = (id) => {
        this.setState({detailsOpen: id})
    }

    hideDetails = () => {
        this.setState({detailsOpen: null})
    }

    render() {
        return (
            <div className={classes.OrdersPage}>
                <Current 
                    data={this.state.currentOrders} 
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
                <PlaceOrder data={this.state.inventory}/>
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
