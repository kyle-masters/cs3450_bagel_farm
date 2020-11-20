import React, {Component} from 'react';
import axios from '../../axios-main'
import Accounts from './accounts/accounts';
import classes from './manage-accounts-page.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import Button from '../../components/UI/ButtonRelative/ButtonRelative'

class ManageAccountsPage extends Component {
    state = {
        accounts: null,
        accountSelections: null,
        accountSelectionsShown: null,
        updateAccounts: false,
        detailsOpen: null,
        spinner: false
    }

    componentDidUpdate() {
        if (this.state.updateAccounts) {
            this.resetState()
        }
    }

    componentDidMount() {
        this.getData();
    }

    showDetails = (id) => {
        this.setState({detailsOpen: id})
    }

    hideDetails = () => {
        this.setState({detailsOpen: null})
    }

    getData = () => {
        axios.get('/manageAccounts') 
            .then((response) => {
                this.setState({accounts: response.data.accounts})
                this.updateAccountSelections(response.data.accounts)
            })
    }

    deleteAccount = (id) => {
        this.setState({spinner: true})
        axios.get(`/deleteAccount?id=${id}`) 
        .then((response) => {
            this.setState({updateAccounts: true}
        )});
    }

    setRole = (id, type) => {
        this.setState({spinner: true})
        axios.get(`/updateInfo?id=${id}&field=type&value=${type}`)
        .then((response) => {
            this.setState({updateAccounts: true}
        )});
    }

    resetState = () => {
        this.setState({
            accounts: null,
            accountSelections: null,
            accountSelectionsShown: null,
            updateAccounts: false,
            detailsOpen: null,
            spinner: false})

            this.getData();
    }

    updateAccountSelections = (accounts) => {
        var updatedAccounts = [...accounts]
        updatedAccounts.forEach((el, idx) => {
            updatedAccounts[idx] = {...accounts[idx]}
        })
        this.setState({
            accountSelections: updatedAccounts,
            accountSelectionsShown: updatedAccounts
        })
    }

    render() {
        var manageAccountsPage =
            <div className={classes.ManageAccountsPage}>
                <Button clicked={this.props.backToAccountPage}>Back To Account Page</Button>
                <Accounts 
                    data={this.state.accounts}
                    accountSelections={this.state.accountSelectionsShown}
                    errorDisplayText={this.state.errorDisplayText}
                    showDetails={this.showDetails}
                    hideDetails={this.hideDetails}
                    detailsOpen={this.state.detailsOpen}
                    deleteAccount={this.deleteAccount}
                    setRole={this.setRole}/>
            </div>
        
        if (this.state.spinner) {
            manageAccountsPage = <Spinner />
        }

        return manageAccountsPage;
    }
}

export default ManageAccountsPage;
