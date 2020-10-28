import React, {Component} from 'react';
import axios from '../../axios-main'
import History from './history/history';
import Current from './current/current';
import PlaceOrder from './placeorder/placeorder'


class OrdersPage extends Component {
    state = {
        currentOrders: null,
        orderHistory = null,
        avalibleItems = null
    }

    componentDidMount() {
        // axios.get('/order')
    }

    render() {
        return (
            <div>
                <Current />
                <PlaceOrder />
                <History />
            </div>
        )
    }
}

export default OrdersPage;
