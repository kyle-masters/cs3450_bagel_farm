import React from 'react';
import classes from './order-extras.module.css'
import Item from '../../../../itemlist/item/item'

const orderExtras = (props) => {
    var orderExtra = null

    if (props.data) {
        orderExtra =
            <div className={classes.Items}>
            {props.data.map((el, idx) => {
            if (el.category === "shmear" || el.category === "sandwich") {
                return (
                    <Item
                        data={el}
                        key={idx}
                        extra={true}
                        extraAdd={!isItemConnected(el, props.selectedData)}
                        addRemoveExtrasButtonClicked={() => props.addRemoveExtrasButtonClicked(el,
                                                                                               props.selectedData.name + "_" + props.selectedData.refID,
                                                                                               !isItemConnected(el, props.selectedData))}/>
                )
            } else 
            return null
            })}
        </div>
    }

    return orderExtra;

}

const isItemConnected = (el, selectedData) => {
    var result = false
    selectedData.qty[selectedData.refID].forEach(element => {
        if (el.id === element.id) {
            result = true;
        }
    });
    return result;
}

export default orderExtras;