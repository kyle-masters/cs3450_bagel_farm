import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Toolbar.module.css'

const toolbar = (props) => {

    return(
        <header className={classes.ToolbarBG}>
            <header className={classes.Toolbar}>
                <nav className={classes.Desktop}>
                    <NavigationItems />
                </nav>
            </header>
        </header>
    )
}

export default toolbar;