import React from 'react';
import Item from './item/item'
import ItemHeader from './item/itemheader'
import classes from './itemlist.module.css';

const itemList = (props) => {
    var items = null;

    if (props.data) {
        console.log(props)
        items = 
            <div>
                <ItemHeader />
                <div className={classes.Items}>
                    
                    {props.data.map((el, idx) => {
                    return (
                            <Item
                                data={el}
                                key={idx}
                                restock={() => props.restock(el.id)}/>
                    )
                    })}
                </div>
            </div>
            
    }

    return items;
}

export default itemList;