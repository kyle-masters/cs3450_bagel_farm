import React from 'react';
import Account from './account/account'
import AccountHeader from './account/accountheader'
import classes from './accountlist.module.css';

const accountList = (props) => {
    var accounts = null;

    if (props.data) {
        console.log(props)
        accounts = 
            <div>
                <AccountHeader />
                <div className={classes.Accounts}>
                    
                    {props.data.map((el, idx) => {
                    return (
                            <Account
                                data={el}
                                key={idx}
                                showDetailsID={props.detailsOpen === el.userID}
                                showDetails={() => props.showDetails(el.userID)}
                                hideDetails={props.hideDetails}
                                deleteAccount={() => props.deleteAccount(el.userID)}
                                setRole={props.setRole}/>
                    )
                    })}
                </div>
            </div>
            
    }

    return accounts;
}

export default accountList;