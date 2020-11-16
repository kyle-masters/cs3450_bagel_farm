import React from 'react';
import Item from './item/item'
import ItemHeader from './item/itemheader'
import classes from './itemlist.module.css';

const itemList = (props) => {
    var items = null;

    if (props.data) {
        items = 
            <div>
                <ItemHeader />
                <div className={classes.Items}>
                    {props.data.map((el, idx) => {
                    return (
                            <Item
                                data={el}
                                key={idx}
                                toggleUp={() => props.toggleUp(el.id)}
                                toggleDown={() => props.toggleDown(el.id)}/>
                    )
                    })}
                </div>
            </div>
            
    }

    return items;
}

export default itemList;