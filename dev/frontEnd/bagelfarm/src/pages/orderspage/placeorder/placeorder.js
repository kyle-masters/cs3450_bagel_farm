import React from 'react';

const orderPlacement = (props) => {
    if (props.data) {
        return (
            <div>
                {props.data['1'].name}
            </div>
        )
    } else {
        return null
    }
    
}

export default orderPlacement;
