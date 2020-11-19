import React from 'react';
import classes from './account.module.css';

const accountHeader = (props) => {
    return (
        <div className={[classes.Account, classes.Header].join(" ")}>
            <div className={classes.AccountID}>
                <h2>ID</h2>
            </div>

            <div className={classes.AccountFirstName}>
                <h2>First Name</h2>
            </div>

            <div className={classes.AccountLastName}>
                <h2>Last Name</h2>
            </div>

            <div className={classes.AccountRole}>
                <h2>Role</h2>
            </div>

            <div className={classes.AccountAction}>
                <h2>Action</h2>
            </div>
        </div>
    ) 
}

export default accountHeader;