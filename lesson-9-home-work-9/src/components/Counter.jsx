import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.countValue);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };  

  const handleIncrement = () => {
    dispatch(increment());
  };
  
  return (
    <div className="container col-3 mt-3">
      <div className="input-group justify-content-between align-items-center">
        <div className="input-group-prepend">
          <button
            aria-label="Decrement value"
            onClick={handleDecrement}
            className="btn btn-outline-primary"
          >
            <h1>-</h1>
          </button>
        </div>

        <h1 className="value">{count}</h1>

        <div className="input-group-prepend">
          <button
            aria-label="Increment value"
            className="btn btn-outline-primary"
            onClick={handleIncrement}
          >
            <h1>+</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;