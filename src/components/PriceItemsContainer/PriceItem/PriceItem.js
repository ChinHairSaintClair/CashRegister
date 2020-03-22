import React from 'react';
import './PriceItem.css';
import colors from '../../../constants/colors';

const PriceItem = props => {
    let myStyle = {
        color: colors.secondaryTextColor
    }
    if(props.ommitCursor){
        myStyle = {
            color: colors.secondaryTextColor,
            cursor: 'default'
        }
    }

    return (
        <div className='PriceItem' style={myStyle}>
            R {props.value.toFixed(2)}
        </div>
    );
}

export default PriceItem;