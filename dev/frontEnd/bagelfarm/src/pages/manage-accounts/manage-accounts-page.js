import React, {Component} from 'react';
import axios from '../../axios-main'
import Accounts from './accounts/accounts';
import classes from './manage-accounts-page.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'


class ManageAccountsPage extends Component {
    state = {
        accounts: null,
        accountSelections: null,
        accountSelectionsShown: null,
        updateAccounts: false,
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

    getData = () => {
        axios.get('/manageAccounts') 
            .then((response) => {
                this.setState({accounts: response.data.accounts})
                this.updateAccountSelections(response.data.accounts)
            })
    }

    resetState = () => {
        this.setState({
            accounts: null,
            accountSelections: null,
            accountSelectionsShown: null,
            updateAccounts: false,
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
                <Accounts 
                    data={this.state.accounts}
                    accountSelections={this.state.accountSelectionsShown}
                    errorDisplayText={this.state.errorDisplayText}/>
            </div>
        
        if (this.state.spinner) {
            manageAccountsPage = <Spinner />
        }

        return manageAccountsPage;
    }
}

export default ManageAccountsPage;
