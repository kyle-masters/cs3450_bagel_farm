import React from 'react';
import classes from './account.module.css';

const accountHeader = (props) => {
    return (
        <div className={[classes.Account, classes.Header].join(" ")}>
            <div className={classes.AccountID}>
                <h2>ID</h2>
            </div>

            <div className={classes.AccountName}>
                <h2>Name</h2>
            </div>

            <div className={classes.AccountEmail}>
                <h2>Email</h2>
            </div>

            <div className={classes.AccountRewards}>
                <h2>Rewards</h2>
            </div>

            <div className={classes.AccountBalance}>
                <h2>Balance</h2>
            </div>
        </div>
    ) 
}

export default accountHeader;