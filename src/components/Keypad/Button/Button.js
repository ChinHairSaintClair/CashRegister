import React from 'react';
import './Button.css';
import colors from '../../../constants/colors';

const Button = props => {
    return (
        <div className='Button' onClick={props.click} style={{color: colors.primaryTextColor, backgroundColor: colors.keyButtonColor, border: '1px solid ' + colors.secondaryBackgorundColor}}>
            <div className='Value'>{props.item}</div>
        </div>
    );
}

export default Button;