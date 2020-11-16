import React, {Component} from 'react'
import axios from '../../../axios-main'
import ReadyOrders from '../manager-tasks/ready-for-pickup-orders/ready-for-pickup-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Button from '../../../components/UI/ButtonRelative/ButtonRelative'

class CashierTasks extends Component {
    state = {
        ordersReady: null,
        detailsOpen: null,
        spinner: false
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get("/orderStatus?status=3")
            .then((response) => {
                this.setState({ordersReady: response.data['orders']})
            })
    }

    resetState = () => {
        this.getData()
    }

    moveToCompleteHandler = (id) => {
        this.setState({detailsOpen: null, spinner: true})
        axios.get("/update?order=" + id + "&status=4")
            .then((response) => {
                this.resetState()
                this.setState({spinner: false})
            })
    }

    moveToDonatedHandler = (id) => {
        this.setState({detailsOpen: null, spinner: true})
        axios.get("/update?order=" + id + "&status=5")
            .then((response) => {
                this.resetState()
                this.setState({spinner: false})
            })
    }

    showDetails = (id) => {
        this.setState({detailsOpen: id})
    }

    hideDetails = () => {
        this.setState({detailsOpen: null})
    }

    render() {
        var cashierTasks =
            <div>
                <Button clicked={this.props.backToAccountPage}>Back To Account Page</Button>
                <ReadyOrders 
                    data={this.state.ordersReady}
                    ready={true}
                    update={this.moveToCompleteHandler}
                    donate={this.moveToDonatedHandler}
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
            </div>

        if (this.state.spinner) {
            cashierTasks = <Spinner />
        }
        
        return cashierTasks
    }
}

export default CashierTasks;
