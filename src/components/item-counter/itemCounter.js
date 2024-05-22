import { useState } from 'react';
import './itemCounter.css';

function ItemCounter() {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleRemove = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }
  const handleMultiply = () => {
    setCounter(101 * Math.floor(Math.random(2 * 10) * 10) / 10);
  }

  return (
  <>
    <div id="wrapper">
        <div className='counterWrap'>
            <h1 id="count">{counter}</h1>
            <div className="buttons">
                <button className='remove' onClick={handleRemove}>Remove</button>
                <button className='add' onClick={handleAdd}>Add</button>
                <button className='multiply' onClick={handleMultiply}>Random</button>
            </div>
        </div>
    </div>
  </>
  );
}

export default ItemCounter;
