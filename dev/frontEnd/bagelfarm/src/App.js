import React from 'react';
import { Switch , Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          
        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
