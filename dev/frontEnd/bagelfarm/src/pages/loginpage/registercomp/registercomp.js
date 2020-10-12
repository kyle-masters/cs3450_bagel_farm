import React from 'react'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import classes from './registercomp.module.css'

const registerForm = (props) => {
    const formElementsArray = []
    for (let key in props.formElements) {
        formElementsArray.push({
            id: key,
            config: props.formElements[key]
        })
    }

    return (
        <div className={classes.Register}>
            <form onSubmit={props.submitHandler}>
               {formElementsArray.map(formElement => (
                   <Input   
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => props.changed(event, formElement.id)}
                        label={formElement.config.label}
                    />
               ))}
            </form>
            <Button
                clicked={props.submit}
                btnType={'Submit'}
                disabled={false}>Register</Button>
        </div>
    )
}

export default registerForm;