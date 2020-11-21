import axios from '../../axios-main'
import React, {Component} from "react"
import Button from '../../components/UI/Button/Button'
import './account-info.css';
import Spinner from '../../components/UI/Spinner/Spinner'
import ChefTasks from './chef-tasks/chef-tasks'
import CashierTasks from './cashier-tasks/cashier-tasks'
import ManagerTasks from './manager-tasks/manager-tasks'
import ManageAccounts from '../../pages/manage-accounts/manage-accounts-page'
import InventoryPage from '../inventory-page/inventory-page'
import { withRouter } from "react-router";

class AccountInfo extends Component {
    state = {
        userData: {
            'firstName': null,
            'lastName': null,
            'phoneNumber': null,
            'email': null,
            'balance': null,
            'rewards': null,
            'type': null,
          },
          fieldUpdating: false,
          firstNameInput: null,
          lastNameInput: null,
          phoneNumerInput: null,
          emailInput: null,
          balanceInput: null,
          spinner: false,
          showTaskPage: false,
          showManagePage: false,
          showInventoryPage: false
    }

    componentDidUpdate() {
        if (this.state.fieldUpdating) {
            this.resetState()
        }
    }

    componentDidMount() {
        this.resetState();
    }
    
    handleChange(e, field) {
        let value = e.target.value;
        if(field === 'firstName') {
            this.setState({ firstNameInput: value });
        } else if(field === 'lastName') {
            this.setState({ lastNameInput: value });
        } else if(field === 'password') {
            this.setState({ passwordInput: value });
        } else if(field === 'password2') {
            this.setState({ reenterPasswordInput: value });
        } else if(field === 'email') {
            this.setState({ emailInput: value });
        } else if(field === 'balance') {
            this.setState({ balanceInput: value });
        }
    }

    handleClick(e, field) {
        this.setState({spinner: true})
        if(field === 'name') {
            if(this.state.firstNameInput != null && this.state.lastNameInput != null) {
                this.updateField('firstName', this.state.firstNameInput);
            }
        } else if(field === 'password') {
            if(this.state.passwordInput != null && this.state.passwordInput === this.state.reenterPasswordInput) {
                this.updateField('password', this.state.passwordInput);
            }
        } else if(field === 'email') {
            if(this.state.emailInput != null) {
                this.updateField('email', this.state.emailInput);
            }
        } else if(field === 'balance') {
            if(this.state.balanceInput != null) {
                this.updateField('balance', +this.state.balanceInput + +this.state.userData['balance']);
            }
        }
    }

    updateField = (field, value) => {
        this.setState({spinner: true})
        axios.get(`/updateInfo?id=${this.props.getID()}&field=${field}&value=${value}`)
            .then((response) => {
                var tempLastName = this.state.lastNameInput;
                this.setState({fieldUpdating: true});
                if(field === 'firstName') {
                    this.updateField('lastName', tempLastName);
                }
                const data = response.data
                this.setState({
                    userData: {
                        'firstName': data['firstName'],
                        'lastName': data['lastName'],
                        'phoneNumber': data['phoneNumber'],
                        'email': data['email'],
                        'balance': data['balance'],
                        'rewards': data['rewards'],
                        'type': data['type']
                    }
                })
            })
    }

    flipEditName = () => {
        this.editName = !this.editName;
        if(this.nameEditOrCancel === "Edit") {
            this.nameEditOrCancel = "Cancel";
        } else {
            this.nameEditOrCancel = "Edit";
        }
        this.forceUpdate();
    };

    flipEmailAddress = () => {
        this.editEmail = !this.editEmail;
        if(this.emailEditOrCancel === "Edit") {
            this.emailEditOrCancel = "Cancel";
        } else {
            this.emailEditOrCancel = "Edit";
        }
        this.forceUpdate();
    };

    flipPassword = () => {
        this.editPassword = !this.editPassword;
        if(this.passwordEditOrCancel === "Edit") {
            this.passwordEditOrCancel = "Cancel";
        } else {
            this.passwordEditOrCancel = "Edit";
        }
        this.forceUpdate();
    };

    flipFunds = (e) => {
        this.editFunds = !this.editFunds;

        if(!this.editFunds) {
            this.handleClick(e, 'balance');
        }

        if(this.fundsBtnText === "Add Funds") {
            this.fundsBtnText = "Confirm Addition";
        } else {
            this.fundsBtnText = "Add Funds";
        }
        this.forceUpdate();
    };

    resetState() {
        axios.get('/account?id=' + this.props.getID())
        .then((response) => {
            const data = response.data
            this.setState({
                userData: {
                    'firstName': data['firstName'],
                    'lastName': data['lastName'],
                    'phoneNumber': data['phoneNumber'],
                    'email': data['email'],
                    'balance': data['balance'],
                    'rewards': data['rewards'],
                    'type': data['type']
                  },
                  fieldUpdating: false,
                  firstNameInput: null,
                  lastNameInput: null,
                  passwordInput: null,
                  reenterPasswordInput: null,
                  emailInput: null,
                  balanceInput: null,
                  spinner: false
            })

            // the code below could be done in a MUCH better way
            // it makes sure that when a field is changed the page will update in a nice way
            this.editName = false;
            this.editPassword = false;
            this.editEmail = false;
            this.editFunds = false;
            this.nameEditOrCancel = 'Edit';
            this.passwordEditOrCancel = 'Edit';
            this.emailEditOrCancel = 'Edit';
            this.fundsBtnText = 'Add Funds';
            this.forceUpdate();
        })
    }

    viewTasksButtonHandler = () => {
        this.setState({showTaskPage: true})
    }

    manageAccountsButtonHandler = () => {
        this.setState({showManagePage: true})
    }

    inventoryButtonHandler = () => {
        this.setState({showInventoryPage: true})
    }

    nextPath(path) {
        this.props.history.push('/order')
    }

    backToAccountPageHandler = () => {
        this.setState({
            showTaskPage: false,
            showManagePage: false,
            showInventoryPage: false})
    }

    editName = false;
    nameEditOrCancel = "Edit"
    editEmail = false;
    emailEditOrCancel = "Edit"
    editPassword = false;
    passwordEditOrCancel = "Edit"
    editFunds = false;
    fundsBtnText = "Add Funds"
    render() {
        if (this.state.spinner) {
            return <Spinner />
        }

        var accountPage = 
            <div className='account-info'>
                <div>
                    <h2 className='account-info-header'> Account Information </h2>
                    <div className="content-area">
                        <div className="content-item">
                            <h1 className="content-header" id="first-last-name"> First & Last Name </h1>
                            <Button width={"12%"}
                                    height={"23%"}
                                    right={"2%"}
                                    top={"16%"}
                                    fontSize={"15px"}
                                    zIndex={"99"}
                                    clicked={e => this.flipEditName()}>{this.nameEditOrCancel}</Button>
                            {this.editName ? 
                                            <div className="edit-name">
                                                <input type="text" id="first-input-box" placeholder="First Name" onChange={ e => this.handleChange(e, 'firstName') }/>
                                                <input type="text" id="second-input-box" placeholder="Last Name" onChange={ e => this.handleChange(e, 'lastName') }/>
                                                <Button width={"24%"}
                                                        height={"37%"}
                                                        right={"2%"}
                                                        bottom={"10%"}
                                                        fontSize={"15px"}
                                                        clicked={e => this.handleClick(e, 'name')}>Confirm Change</Button>
                                            </div>
                                            : 
                                            <h1 className="content-info"> {this.state.userData['firstName']} {this.state.userData['lastName']}</h1>}
                        </div>
                        <div className="content-item" id="email-address">
                            <h1 className="content-header"> Email Address </h1>
                            <Button width={"12%"}
                                    height={"23%"}
                                    right={"2%"}
                                    top={"16%"}
                                    fontSize={"15px"}
                                    zIndex={"99"}
                                    clicked={e => this.flipEmailAddress()}>{this.emailEditOrCancel}</Button>
                            {this.editEmail ? 
                                            <div className="edit-name">
                                                <input type="text" id="input-box" placeholder="Email Address" onChange={ e => this.handleChange(e, 'email') }/>
                                                <Button width={"24%"}
                                                        height={"37%"}
                                                        right={"2%"}
                                                        bottom={"10%"}
                                                        fontSize={"15px"}
                                                        clicked={e => this.handleClick(e, 'email')}>Confirm Change</Button>
                                            </div>
                                            : 
                                            <h1 className="content-info"> {this.state.userData['email']}</h1>}
                        </div>
                        <div className="content-item" id="password">
                            <h1 className="content-header"> Password </h1>
                            <Button width={"12%"}
                                    height={"23%"}
                                    right={"2%"}
                                    top={"16%"}
                                    fontSize={"15px"}
                                    zIndex={"99"}
                                    clicked={e => this.flipPassword()}>{this.passwordEditOrCancel}</Button>
                            {this.editPassword ? 
                                            <div className="edit-name">
                                                <input type="password" id="first-input-box" placeholder="New Password" onChange={ e => this.handleChange(e, 'password') }/>
                                                <input type="password" id="second-input-box" placeholder="Re-enter Password" onChange={ e => this.handleChange(e, 'password2') }/>
                                                <Button width={"24%"}
                                                        height={"37%"}
                                                        right={"2%"}
                                                        bottom={"10%"}
                                                        fontSize={"15px"}
                                                        clicked={e => this.handleClick(e, 'password')}>Confirm Change</Button>
                                            </div>
                                            : 
                                            <h1 className="content-info" onClick={e => this.flipPassword()}> Change Password</h1>}
                        </div>
                        <div className="content-item" id="funds">
                            <h1 className="content-header"> Funds </h1>
                            <Button width={"35%"}
                                    height={"45%"}
                                    right={"2%"}
                                    bottom={"8%"}
                                    zIndex={"99"}
                                    clicked={e => this.flipFunds(e)}>{this.fundsBtnText}</Button>
                            {this.editFunds ? 
                                            <div className="edit-name">
                                                <input type="number" min="1" step="any" id="input-box" placeholder="Enter Amount To Add" onChange={ e => this.handleChange(e, 'balance') }/>
                                                <Button width={"35%"}
                                                        height={"45%"}
                                                        right={"2%"}
                                                        bottom={"8%"}
                                                        zIndex={"99"}
                                                        clicked={e => this.flipFunds(e)}>{this.fundsBtnText}</Button>
                                            </div>
                                            : 
                                            <h1 className="content-info"> ${this.state.userData['balance']} </h1>}
                            
                        </div>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    left={"5%"}
                                    bottom={"14%"}
                                    clicked={() => this.nextPath('/order')}>View Orders</Button>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    right={"5%"}
                                    bottom={"14%"}
                                    disabled={this.state.userData.type === 0}
                                    clicked={this.viewTasksButtonHandler}>View Tasks</Button>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    left={"5%"}
                                    bottom={"3%"}
                                    disabled={this.state.userData.type === 0 || this.state.userData.type === 1}
                                    clicked={this.inventoryButtonHandler}>Inventory</Button>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    right={"5%"}
                                    bottom={"3%"}
                                    disabled={this.state.userData.type !== 3}
                                    clicked={this.manageAccountsButtonHandler}>Manage Accounts</Button>
                    </div>
                </div>
            </div>

        if (this.state.showTaskPage) {
            if (this.state.userData.type === 2) {
                accountPage = <ChefTasks
                                    getID={this.props.getID}
                                    backToAccountPage={this.backToAccountPageHandler}/>
            } else if (this.state.userData.type === 1) {
                accountPage = <CashierTasks 
                                    getID={this.props.getID}
                                    backToAccountPage={this.backToAccountPageHandler}/>
            } else if (this.state.userData.type === 3) {
                accountPage = <ManagerTasks
                                    getID={this.props.getID}
                                    backToAccountPage={this.backToAccountPageHandler}/>
            }
        } else if (this.state.showManagePage) {
            accountPage = <ManageAccounts 
                                backToAccountPage={this.backToAccountPageHandler}/>
        } else if (this.state.showInventoryPage) {
            accountPage = <InventoryPage 
                                backToAccountPage={this.backToAccountPageHandler}/>
        }

        return accountPage;
    }
}

export default withRouter(AccountInfo);
