import React, { useState } from 'react';
import './Keypad.css';
import colors from '../../constants/colors';
import Button from './Button/Button';

import CurrentAmountContainer from './CurrentAmountContainer/CurrentAmountContainer';

const Keypad = props => {
    const [currentPriceArr, setCurrentPriceArr] = useState([]);

    const addNumberToPrice = (value) => {
        if(currentPriceArr.length < 8){
            const arr = [...currentPriceArr];
            arr.push(value);
            setCurrentPriceArr(arr);
        }
    }

    const removeNumberFromPrice = () => {
        const arr = [...currentPriceArr];
        arr.pop();
        setCurrentPriceArr(arr);
    }

    const resetPrice = () => {
        setCurrentPriceArr([]);
    }

    let price = 0;
    if(currentPriceArr.length > 0){
        price = parseFloat(currentPriceArr.join('') / 100);
    }

    const isValidAmount = () => {
        return price > 0 && price < 1000000;
    }

    const addAmountAndResetCurrent = () => {
        if(isValidAmount()){
            props.add(price); 
            resetPrice();
        }
        else{
            alert('Please supply a valid value');
        }
    }

    return (
        <div className='Keypad' style={{ border: '3px solid '+colors.borderColor}}>
            <CurrentAmountContainer price={price.toFixed(2)} />
            <div className='KeypadButtonContainer'>
                <div className='Row'>
                    <Button item='1' click={() => addNumberToPrice(1)}/>
                    <Button item='2' click={() => addNumberToPrice(2)}/>
                    <Button item='3' click={() => addNumberToPrice(3)}/>
                </div>
                <div className='Row'>
                    <Button item='4' click={() => addNumberToPrice(4)}/>
                    <Button item='5' click={() => addNumberToPrice(5)}/>
                    <Button item='6' click={() => addNumberToPrice(6)}/>
                </div>
                <div className='Row'>
                    <Button item='7' click={() => addNumberToPrice(7)}/>
                    <Button item='8' click={() => addNumberToPrice(8)}/>
                    <Button item='9' click={() => addNumberToPrice(9)}/>
                </div>
                <div className='Row'>
                    <Button item='❌' click={removeNumberFromPrice}/>
                    <Button item='0' click={() => addNumberToPrice(0)}/>
                    <Button item='✅' click={() => { addAmountAndResetCurrent()}}/>
                </div>
            </div>
        </div>
    );
}

export default Keypad;