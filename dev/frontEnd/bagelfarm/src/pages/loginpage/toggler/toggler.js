import React from 'react';

import Button from '../../../components/UI/Button/Button'

const toggler = (props) => {
    var togglerComp = 
        <div>
            <Button
                btnType={'LoginToggler'}
                width={'50%'}
                height={'50px'}
                top={'0%'}
                left={'0%'}
                backgroundColor={props.login ? 'rgba(215, 167, 105, 0.151)': null}
                clicked={props.signin}>Sign-In</Button>
            <Button 
                btnType={'LoginToggler'}
                width={'50%'}
                height={'50px'} 
                top={'0%'} 
                left={'50%'} 
                backgroundColor={props.login ? null : 'rgba(215, 167, 105, 0.151)'} 
                clicked={props.register}>Register</Button>
        </div>

    return togglerComp
}

export default toggler;