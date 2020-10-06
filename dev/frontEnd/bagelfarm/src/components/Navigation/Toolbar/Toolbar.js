import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from '../SideDrawer/SideDrawer'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import classes from './Toolbar.module.css'

const toolbar = (props) => {

    return(
        <header className={classes.Toolbar}>
            <nav className={classes.Desktop}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;