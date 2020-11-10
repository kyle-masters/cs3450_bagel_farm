import axios from '../../axios-main'
import React, {Component} from "react"
import Button from '../../components/UI/Button/Button'
import './account-info.css';
import Modal from '../../components/UI/Modal/Modal'

class AccountInfo extends Component {
    state = {
        userData: {
            'firstName': null,
            'lastName': null,
            'phoneNumber': null,
            'email': null,
            'balance': null,
            'rewards': null
          }
    }

    componentDidMount() {
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
                        'rewards': data['rewards']
                      }
                })
            })
    }

    showAlert = e => {
        e.preventDefault();
        alert('hello')
      };

    flipEditName = () => {
        this.editName = !this.editName;
        if(this.nameEditOrCancel == "Edit") {
            this.nameEditOrCancel = "Cancel";
        } else {
            this.nameEditOrCancel = "Edit";
        }
        this.forceUpdate();
    };

    flipEmailAddress = () => {
        this.editEmail = !this.editEmail;
        if(this.emailEditOrCancel == "Edit") {
            this.emailEditOrCancel = "Cancel";
        } else {
            this.emailEditOrCancel = "Edit";
        }
        this.forceUpdate();
    };

    flipPassword = () => {
        this.editPassword = !this.editPassword;
        if(this.passwordEditOrCancel == "Edit") {
            this.passwordEditOrCancel = "Cancel";
        } else {
            this.passwordEditOrCancel = "Edit";
        }
        this.forceUpdate();
    };

    flipFunds = () => {
        this.editFunds = !this.editFunds;
        if(this.fundsBtnText == "Add Funds") {
            this.fundsBtnText = "Confirm Addition";
        } else {
            this.fundsBtnText = "Add Funds";
        }
        this.forceUpdate();
    };

    editName = false;
    nameEditOrCancel = "Edit"
    editEmail = false;
    emailEditOrCancel = "Edit"
    editPassword = false;
    passwordEditOrCancel = "Edit"
    editFunds = false;
    fundsBtnText = "Add Funds"
    render() {
        return (
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
                                            <div class="edit-name">
                                                <input type="text" id="first-input-box" placeholder="First Name"/>
                                                <input type="text" id="second-input-box" placeholder="Last Name"/>
                                                <Button width={"24%"}
                                                        height={"37%"}
                                                        right={"2%"}
                                                        bottom={"10%"}
                                                        fontSize={"15px"}>Confirm Change</Button>
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
                                            <div class="edit-name">
                                                <input type="text" id="input-box" placeholder="Email Address"/>
                                                <Button width={"24%"}
                                                        height={"37%"}
                                                        right={"2%"}
                                                        bottom={"10%"}
                                                        fontSize={"15px"}>Confirm Change</Button>
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
                                            <div class="edit-name">
                                                <input type="password" id="first-input-box" placeholder="New Password"/>
                                                <input type="password" id="second-input-box" placeholder="Re-enter Password"/>
                                                <Button width={"24%"}
                                                        height={"37%"}
                                                        right={"2%"}
                                                        bottom={"10%"}
                                                        fontSize={"15px"}>Confirm Change</Button>
                                            </div>
                                            : 
                                            <a href="#"><h1 className="content-info" onClick={e => this.flipPassword()}> Change Password</h1></a>}
                        </div>
                        <div className="content-item" id="funds">
                            <h1 className="content-header"> Funds </h1>
                            <Button width={"35%"}
                                    height={"45%"}
                                    right={"2%"}
                                    bottom={"8%"}
                                    zIndex={"99"}
                                    clicked={e => this.flipFunds()}>{this.fundsBtnText}</Button>
                            {this.editFunds ? 
                                            <div class="edit-name">
                                                <input type="number" min="1" step="any" id="input-box" placeholder="Enter Amount To Add"/>
                                                <Button width={"35%"}
                                                        height={"45%"}
                                                        right={"2%"}
                                                        bottom={"8%"}
                                                        zIndex={"99"}
                                                        clicked={e => this.flipFunds()}>{this.fundsBtnText}</Button>
                                            </div>
                                            : 
                                            <h1 className="content-info"> ${this.state.userData['balance']} </h1>}
                            
                        </div>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    left={"5%"}
                                    bottom={"14%"}>View Orders</Button>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    right={"5%"}
                                    bottom={"14%"}>View Tasks</Button>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    left={"5%"}
                                    bottom={"3%"}>Inventory</Button>
                        <Button width={"43%"}
                                    height={"8.5%"}
                                    right={"5%"}
                                    bottom={"3%"}>Manage Accounts</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountInfo;
