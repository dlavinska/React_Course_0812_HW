import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }


  return (
      <div className='counter__wrap'>
        <h1>Count: {count}</h1>
        <button className='btn' onClick={handleIncrement}>Increment count</button>
        <button className='btn' onClick={handleDecrement}>Decrement count</button>
        <button className='btn' onClick={handleReset}>Reset count</button>
      </div>
  )
}

export default Counter;