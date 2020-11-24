import React from 'react';
import Input from '../../../../components/UI/Input/Input'
import classes from './searchbar.module.css'
import Button from '../../../../components/UI/ButtonRelative/ButtonRelative'

const searchBar = (props) => {
    var searchBar = null;

    if (props.searchBarForm) {
        var formElement = props.searchBarForm;

        searchBar =
            <div>
                <form className={classes.Form} onSubmit={props.submitHandler}>
                    <Input
                        elementType={formElement.elementType}
                        elementConfig={formElement.elementConfig}
                        value={formElement.value}
                        changed={(event) => props.changed(event)}
                        />
                </form>
                {props.filterByPopular ? <Button clicked={props.toggleFilter}> Filter By Popularity </Button> : <Button clicked={props.toggleFilter}> Unilter By Popularity </Button>}
            </div>
    }

    return searchBar;    
}

export default searchBar;