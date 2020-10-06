import React, { Component } from 'react';

import classes from './Layout.module.css'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar.js'

class Layout extends Component {

state = {
  sideDrawerOpen: false
}

toggleClickedHandler = () => {
  this.setState({sideDrawerOpen: !this.state.sideDrawerOpen})
}

closeDrawer = () => {
  this.setState({sideDrawerOpen: false})
}

render () {
  return (
      <div className={classes.Layout}>
        <Toolbar 
          drawerOpen={this.state.sideDrawerOpen}
          toggleClicked={this.toggleClickedHandler}
          closeDrawer={this.closeDrawer}/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;