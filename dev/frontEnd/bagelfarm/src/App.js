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
            <Route path='/account'>
              <AccountInfo 
                getID={this.getUserID}
                />
            </Route>
          </Switch>
        </Layout> 
        :
        <LoginPage
          setID={this.setUserID}
          getID={this.getUserID}/>}
      </div>
    );
  }
}

export default App;
