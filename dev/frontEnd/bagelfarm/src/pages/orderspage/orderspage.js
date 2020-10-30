import React, {Component} from 'react';
import axios from '../../axios-main'
import History from './history/history';
import Current from './current/current';
import PlaceOrder from './placeorder/placeorder'


class OrdersPage extends Component {
    state = {
        currentOrders: null,
        orderHistory: null,
        inventory: null
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

    render() {
        return (
            <div>
                <Current data={this.state.currentOrders}/>
                <PlaceOrder data={this.state.inventory}/>
                <History data={this.state.orderHistory}/>
            </div>
        )
    }
}

export default OrdersPage;
