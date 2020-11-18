import React from 'react';
import classes from './account.module.css';
import AccountInfo from '../../accountinfo/accountinfo'

const account = (props) => {
    var accountBox = null;
    var role = {0: 'Customer', 1: 'Cashier', 2: 'Chef', 3: 'Manager'}

    if (props.data) {
        accountBox =
            <>
                <div className={classes.Account}>
                    {props.showDetailsID ? <button className={classes.DetailsBtn} onClick={props.hideDetails}>-</button> 
                                         : <button className={classes.DetailsBtn} onClick={props.showDetails}>+</button>}
                    <div className={classes.AccountID}>
                        <h3>{props.data.userID}</h3>
                    </div>

                    <div className={classes.AccountFirstName}>
                        <h3>{props.data.firstName}</h3>
                    </div>

                    <div className={classes.AccountLastName}>
                        <h3>{props.data.lastName}</h3>
                    </div>

                    <div className={classes.AccountRole}>
                        {props.data.type === 0 ?
                        <select>
                            <option value="0" onClick={() => props.setRole(props.data.userID, 0)}>{role[0]}</option>
                            <option value="1" onClick={() => props.setRole(props.data.userID,1)}>{role[1]}</option>
                            <option value="2" onClick={() => props.setRole(props.data.userID,2)}>{role[2]}</option>
                            <option value="3" onClick={() => props.setRole(props.data.userID,3)}>{role[3]}</option>
                        </select>
                        :
                        props.data.type === 1 ?
                            <select>
                                <option value="1" onClick={() => props.setRole(props.data.userID,1)}>{role[1]}</option>
                                <option value="0" onClick={() => props.setRole(props.data.userID,0)}>{role[0]}</option>
                                <option value="2" onClick={() => props.setRole(props.data.userID,2)}>{role[2]}</option>
                                <option value="3" onClick={() => props.setRole(props.data.userID,3)}>{role[3]}</option>
                            </select>
                            :
                            props.data.type === 2 ?
                                <select>
                                    <option value="2" onClick={() => props.setRole(props.data.userID,2)}>{role[2]}</option>
                                    <option value="0" onClick={() => props.setRole(props.data.userID,0)}>{role[0]}</option>
                                    <option value="1" onClick={() => props.setRole(props.data.userID,1)}>{role[1]}</option>
                                    <option value="3" onClick={() => props.setRole(props.data.userID,3)}>{role[3]}</option>
                                </select>
                                :
                                <select>
                                    <option value="3" onClick={() => props.setRole(props.data.userID,3)}>{role[3]}</option>
                                    <option value="0" onClick={() => props.setRole(props.data.userID,0)}>{role[0]}</option>
                                    <option value="1" onClick={() => props.setRole(props.data.userID,1)}>{role[1]}</option>
                                    <option value="2" onClick={() => props.setRole(props.data.userID,2)}>{role[2]}</option>
                                </select>
                        }
                    </div>

                    <div className={classes.AccountAction}>
                        <button className={classes.Button} onClick={props.deleteAccount}>Delete</button>
                    </div>
                </div>
                {props.showDetailsID ? <AccountInfo className={classes.Info} {...props.data}/> : null}  
            </>
    }

    return accountBox;
}

export default account;