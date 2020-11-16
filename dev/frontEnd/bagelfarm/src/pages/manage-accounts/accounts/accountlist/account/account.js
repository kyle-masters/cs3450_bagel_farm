import React from 'react';
import classes from './account.module.css';

const account = (props) => {
    var accountBox = null;

    if (props.data) {
        accountBox = 
            <div className={classes.Account}>
                <div className={classes.AccountID}>
                    <h3 className={classes.UserID}>{props.data.userID}</h3>
                </div>

                <div className={classes.AccountName}>
                    <h3 className={classes.Name}>{props.data.firstName} {props.data.lastName}</h3>
                </div>

                <div className={classes.AccountEmail}>
                    <h3 className={classes.Email}>{props.data.email}</h3>
                </div>

                <div className={classes.AccountRewards}>
                    <h3 className={classes.Rewards}>{props.data.rewards}</h3>
                </div>

                <div className={classes.AccountBalance}>
                    <h3 className={classes.Balance}>${props.data.balance}</h3>
                </div>
            </div>
    }

    return accountBox;
}

export default account;