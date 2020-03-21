import React from 'react';
import './PriceItemsContainer.css';
import colors from '../../constants/colors';
import PriceItem from './PriceItem/PriceItem';

const TotalItems = props => {
    return (
        <div className='PriceItemsContainer' style={{ backgroundColor: colors.secondaryBackgorundColor}}>
            {props.items.length === 0 ? <p className='NoCharges'>No charges</p> : props.items.map((item) => {
                return(<div key={item.id} onClick={() => props.remove(item)}><PriceItem value={item.value} /></div>);
            })}
            <div className='TotalSeperator'/>
            <PriceItem value={props.total} ommitCursor/>
        </div>
    );
}

export default TotalItems;