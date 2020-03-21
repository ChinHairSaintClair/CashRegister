import React from 'react';
import './CurrentAmountContainer.css';
import Price from '../Price/Price';

const CurrentAmountContainer = props => {
    return (
        <div className='CurrentAmountContainer'>
            <Price amount={props.price} />
        </div>
    );
}

export default CurrentAmountContainer;