import React from 'react';
import AccountList from './accountlist/accountlist'
import classes from './accounts.module.css'

const accountList = (props) => {
    return(
        <div>
            <h1>Accounts</h1>
            <div className={classes.Accounts}>
                <AccountList 
                    data={props.accountSelections}
                    showDetails={props.showDetails}
                    hideDetails={props.hideDetails}
                    detailsOpen={props.detailsOpen}
                    deleteAccount={props.deleteAccount}
                    setRole={props.setRole}/>
            </div>
        </div>
    )
}

export default accountList;
