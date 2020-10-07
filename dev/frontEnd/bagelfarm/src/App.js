import React from 'react';
import { Switch , Route } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import LoginPage from './pages/loginpage/logainpage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login' component={LoginPage} />
        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
