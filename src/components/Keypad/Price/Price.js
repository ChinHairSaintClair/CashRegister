import React from 'react';
import colors from '../../../constants/colors';
import './Price.css';

const Price = props => {
    //const val = parseInt(props.amount).toFixed(2);

    return (
        <div className='Price'>
            <input inputMode='none' value={'R ' + props.amount} onChange={()=>{}} style={{ textShadow: '0 0 0 ' + colors.primaryTextColor}}/>
        </div>
    );
}

export default Price;