import classes from './loginpage.module.css';
import React, { Component } from 'react';

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

    loginClickedHandler = () => {
        alert('Logged In!')
    }

    creatAccountClickedHandler = () => {
        alert('Account Created!')
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
