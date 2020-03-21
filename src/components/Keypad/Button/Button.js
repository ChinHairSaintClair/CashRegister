import React from 'react';
import './Button.css';
import colors from '../../../constants/colors';

const Button = props => {
    return (
        <div className='Button' onClick={props.click} style={{color: colors.primaryTextColor}}>
            {props.item}
        </div>
    );
}

export default Button;