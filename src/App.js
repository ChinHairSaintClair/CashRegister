import React, { useState } from 'react';
import './App.css';

import Keypad from './components/Keypad/Keypad';
import TotalItems from './components/PriceItemsContainer/PriceItemsContainer';

function App() {
  const [chargeItems, setChargeItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (value) => {
    const item = {
      id: ((Math.random() * 10) + (Math.random() * 10)),
      value: value
    }

    const items = [...chargeItems, item];
    setChargeItems(items);

    setTotal(total + value);
  }

  const removeItem = (item) => {
    const items = [...chargeItems];
    var removeIndex = items.map(function(item) { return item.id; }).indexOf(item.id);
    items.splice(removeIndex, 1);

    setChargeItems(items);

    setTotal(total - item.value);
  }

  return (
    <div className="App">
      <Keypad add={addItem} />
      <div className='CostContainer'>
        <TotalItems items={chargeItems} total={total} remove={removeItem} />
      </div>
    </div>
  );
}

export default App;
