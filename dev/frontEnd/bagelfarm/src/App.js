import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import AccountInfo from './pages/account-info/account-info'
import HomePage from './pages/home-page/home-page';
import Orders from './pages/orderspage/orderspage'
import LoginPage from './pages/loginpage/loginpage';
import Inventory from './pages/inventory-page/inventory-page'
import ManageAccounts from './pages/manage-accounts/manage-accounts-page'

class App extends Component {
  state = {
    id: null,
  }

  getUserID = () => {
    return this.state.id
  }

  setUserID = (userID) => {
    this.setState({id: userID})
  }

  render() {
    return (
      <div className="App">
        {this.state.id ? 
        <Layout>
          <Switch>
            <Route path='/order'>
              <Orders getID={this.getUserID}/>
            </Route>
            <Route path='/inventory'>
              <Inventory getID={this.getUserID}/>
            </Route>
            <Route path='/manageAccounts'>
              <ManageAccounts getID={this.getUserID}/>
            </Route>
            <Route path='/account'>
              <AccountInfo 
                getID={this.getUserID}
                />
            </Route>
            <Route exact path='/'>
              <HomePage/>
            </Route>
          </Switch>
        </Layout> 
        :
        <LoginPage
          setID={this.setUserID}
          getID={this.getUserID}
          setUserData={this.setUserData}/>
        }
      </div>
    );
  }
}

export default App;
