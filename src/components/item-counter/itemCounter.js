import { useState } from 'react';
import './itemCounter.css';
import { Button } from 'antd';


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
  const handleRandom = () => {
    setCounter(Math.floor(Math.random() * 100) + 10);
  }

  const handleReset = () => {
    setCounter(0);
  }

  return (
            
    <div id="wrapper">
        <div className='counterWrap'>
            <h1 id="count">{counter}</h1>
              
            <div className="buttons">
                <Button color="danger" variant="solid" onClick={handleRemove}>Remove</Button>
                <Button color="primary" variant="solid" onClick={handleAdd}>Add</Button>
                <Button color="default" variant="outlined" onClick={handleRandom}>Random</Button>
                <Button color="default" variant="solid" onClick={handleReset}>Reset</Button>
            </div>

        </div>
    </div>
  )
}

export default ItemCounter;
