import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import AccountInfo from './pages/account-info/account-info'
import LoginPage from './pages/loginpage/loginpage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/account' component={AccountInfo} />
        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
