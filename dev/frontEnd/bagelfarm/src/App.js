import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import AccountInfo from './pages/account-info/account-info'
import LoginPage from './pages/loginpage/loginpage';

class App extends Component {
  state = {
    id: null,
    userData: {
      'firstName': null,
      'lastName': null,
      'phoneNumber': null,
      'email': null,
      'balance': null,
      'rewards': null
    }
  }

  getUserID = () => {
    return this.state.id
  }

  setUserID = (userID) => {
    this.setState({id: userID})
  }

  getUserData = () => {
    return this.state.userData
  }

  setUserData = (userFirstName, userLastName, userPhoneNumber, userEmail, userBalance, userRewards) => {
    this.setState({
      id: this.state.id,
      userData: {
        'firstName': userFirstName,
        'lastName': userLastName,
        'phoneNumber': userPhoneNumber,
        'email': userEmail,
        'balance': userBalance,
        'rewards': userRewards        
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.id ? 
        <Layout>
          <Switch>
            <Route path='/account'>
              <AccountInfo 
                getID={this.getUserID}
                getUserData={this.state.userData}/>
            </Route>
          </Switch>
        </Layout> 
        :
        <LoginPage
          setID={this.setUserID}
          getID={this.getUserID}
          setUserData={this.setUserData}/>}
      </div>
    );
  }
}

export default App;
