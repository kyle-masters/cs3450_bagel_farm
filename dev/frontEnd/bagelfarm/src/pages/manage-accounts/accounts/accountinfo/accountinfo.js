import React from 'react';
import classes from './accountinfo.module.css';

const accountInfo = (props) => {
    var role = {0: 'Customer', 1: 'Cashier', 2: 'Chef', 3: 'Manager'}
    return(
        <div className={classes.InfoBox}>
            <h3>ID: {props.userID}</h3>
            <h3>Name: {props.firstName} {props.lastName}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Phone Number: {props.phoneNumber}</h3>
            <h3>Rewards Points: {props.rewards}</h3>
            <h3>Balance: ${props.balance}</h3>
            <h3>Role: {role[props.type]}</h3>
        </div>
    )
}

export default accountInfo;