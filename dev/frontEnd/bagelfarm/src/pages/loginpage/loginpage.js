import classes from './loginpage.module.css';
import React, { Component } from 'react';

import axios from '../../axios-main'

import ToggleComponent from './togglecomponent/togglecomponent'

class LoginPage extends Component {
    state = {
        isLogin: true,
        formElementsLogin: null,
        formElementsRegister: null
    }

    getFormElementsLogin = () => {
        const formElements = {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: "",
                label: 'Email'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: "",
                label: 'Password'
            },
        }

        this.setState({formElementsLogin: formElements})
    }

    getFormElementsRegister = () => {
        const formElements = {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First Name'
                },
                value: "",
                label: 'First Name'
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: "",
                label: 'Last Name'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: "",
                label: 'Email'
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Phone Number'
                },
                value: "",
                label: 'Phone Number'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: "",
                label: 'Password'
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: "",
                label: 'Confirm Password'
            },
        }

        this.setState({formElementsRegister: formElements})
    }

    inputChangedHandlerRegister = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.formElementsRegister
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({formElementsRegister: updatedOrderForm});
    }

    inputChangedHandlerLogin = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.formElementsLogin
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({formElementsLogin: updatedOrderForm});
    }

    signinHandler = () => {
        this.setState({ isLogin: true})
    }

    registerHandler = () => {
        this.setState({ isLogin: false})
    }

    getLoginQuery = () => {
        const email = this.state.formElementsLogin.email.value
        const password = this.state.formElementsLogin.password.value
        return 'email=' + email + '&password=' + password
    }

    loginClickedHandler = () => {
        axios.get('/login/?' + this.getLoginQuery())
            .then((response) => {
                this.props.setID(response.data['id'])
            })
    }

    getRegisterQuery = () => {
        const firstname = this.state.formElementsRegister.firstName.value
        const lastname = this.state.formElementsRegister.lastName.value
        const email = this.state.formElementsRegister.email.value
        const phone = this.state.formElementsRegister.phoneNumber.value
        const password = this.state.formElementsRegister.password.value
        const cPassword = this.state.formElementsRegister.confirmPassword.value

        var queryString = ""

        queryString += 'firstName=' + firstname
        queryString += '&lastName=' + lastname
        queryString += '&email=' + email
        queryString += '&phoneNumber=' + phone
        queryString += '&password=' + password
        
        return queryString
    }

    creatAccountClickedHandler = () => {
        axios.get('/register/?' + this.getRegisterQuery())
            .then((response) => {
                this.props.setID(response.data['id'])
            })
    }

    componentDidMount() {
        this.getFormElementsLogin()
        this.getFormElementsRegister()
    }


    render() {
        return(
            <div className={classes.Login_Page}>
                <h1>Login Or Create An Account</h1>
                <ToggleComponent 
                    login={this.state.isLogin} 
                    formElementsLogin={this.state.formElementsLogin}
                    formElementsRegister={this.state.formElementsRegister}
                    changedRegister={this.inputChangedHandlerRegister}
                    changedLogin={this.inputChangedHandlerLogin}
                    signin={this.signinHandler}
                    register={this.registerHandler}
                    loginClicked={this.loginClickedHandler}
                    createAccountClicked={this.creatAccountClickedHandler}
                    />
            </div>
        )
    }

}

export default LoginPage
