import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><strong>Home</strong></NavigationItem>
        <NavigationItem link="/manage"><strong>Order</strong></NavigationItem>
        <NavigationItem link="/database"><strong>Account</strong></NavigationItem>
    </ul>
);

export default navigationItems;