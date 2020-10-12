import React, { Component } from 'react';

import LoginForm from './logincomp/logincomp'
import RegisterForm from './registercomp/registercomp'

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
                    type: 'text',
                    placeholder: 'Email'
                },
                value: "",
                label: 'Email'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
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
                    type: 'text',
                    placeholder: 'Email'
                },
                value: "",
                label: 'Email'
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone Number'
                },
                value: "",
                label: 'Phone Number'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: "",
                label: 'Password'
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Confirm Password'
                },
                value: "",
                label: 'Confirm Password'
            },
        }

        this.setState({formElementsRegister: formElements})
    }

    componentDidMount() {
        this.getFormElementsLogin()
        this.getFormElementsRegister()
    }


    render() {
        return(
            <div>
                <h1>This is the Login Page</h1>
                <LoginForm formElements={this.state.formElementsLogin} />
                <RegisterForm formElements={this.state.formElementsRegister} />
            </div>
            
        )
    }

}

export default LoginPage
