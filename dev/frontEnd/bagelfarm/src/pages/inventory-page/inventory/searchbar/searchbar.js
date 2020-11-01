import React from 'react';
import Input from '../../../../components/UI/Input/Input'
import classes from './searchbar.module.css'

const searchBar = (props) => {
    var searchBar = null;

    if (props.searchBarForm) {
        var formElement = props.searchBarForm;

        searchBar =
            <form className={classes.Form} onSubmit={props.submitHandler}>
                <Input
                    elementType={formElement.elementType}
                    elementConfig={formElement.elementConfig}
                    value={formElement.value}
                    changed={(event) => props.changed(event)}
                    />
            </form>
    }

    return searchBar;    
}

export default searchBar;