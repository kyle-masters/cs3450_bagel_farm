import React, {Component} from 'react'
import axios from '../../../axios-main'
import InProgressOrders from './in-progress-orders/in-progress-orders'
import PlacedOrders from './placed-orders/placed-orders'
import ReadyOrders from './ready-for-pickup-orders/ready-for-pickup-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Button from '../../../components/UI/ButtonRelative/ButtonRelative'

class ManagerTasks extends Component {
    state = {
        ordersReady: null,
        ordersPlaced: null,
        ordersInProgress: null,
        detailsOpen: null,
        spinner: false
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get("/orderStatus?status=1")
            .then((response) => {
                this.setState({ordersPlaced: response.data['orders']})
            })
        axios.get("/orderStatus?status=2")
            .then((response) => {
                this.setState({ordersInProgress: response.data['orders']})
            })
        axios.get("/orderStatus?status=3")
            .then((response) => {
                this.setState({ordersReady: response.data['orders']})
            })
    }

    resetState = () => {
        this.getData()
    }

    moveToInProgressHandler = (id) => {
        this.setState({detailsOpen: null, spinner: true})
        axios.get("/update?order=" + id + "&status=2")
            .then((response) => {
                this.resetState()
                this.setState({spinner: false})
            })
    }

    moveToReadyHandler = (id) => {
        this.setState({detailsOpen: null, spinner: true})
        axios.get("/update?order=" + id + "&status=3")
            .then((response) => {
                this.resetState()
                this.setState({spinner: false})
            })
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
        var managerTasks =
            <div >
                <Button clicked={this.props.backToAccountPage}>Back To Account Page</Button>
                <PlacedOrders 
                    data={this.state.ordersPlaced}
                    ready={false}
                    update={this.moveToInProgressHandler}
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
                <InProgressOrders 
                    data={this.state.ordersInProgress}
                    ready={false}
                    update={this.moveToReadyHandler}
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}/>
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
            managerTasks = <Spinner />
        }
        
        return managerTasks
    }
}

export default ManagerTasks;
