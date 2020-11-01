import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><strong>Home</strong></NavigationItem>
        <NavigationItem link="/order"><strong>Order</strong></NavigationItem>
        <NavigationItem link="/account"><strong>Account</strong></NavigationItem>
        <NavigationItem link="/inventory"><strong>Inventory</strong></NavigationItem>
    </ul>
);

export default navigationItems;