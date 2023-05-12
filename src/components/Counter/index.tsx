import React, { RefObject, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { changeIncrementAmount, decrement, increment } from '../../redux/reducers/counterReducer';
import { Link } from 'react-router-dom';

function Counter() {
  const inputRef = useRef(null) as RefObject<HTMLInputElement>;
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const incrementAmount = useSelector((state: RootState) => state.counter.incrementAmount);
  // const decrementAmount = useSelector((state: RootState) => state.counter.decrementAmount);

  function handleClick() {
    const value = inputRef.current?.value || '0';
    dispatch(changeIncrementAmount(Number(value)));
  }

  return (
    <div>
      <Link className="text-blue-500 underline p-2" to="/">
        &lt;- Home
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-3xl">
        <button
          className="rounded bg-green-500 text-center w-9 h-9"
          onClick={() => dispatch(increment())}
        >
          <div className="relative -top-0.5">+</div>
        </button>
        <h3 className="text-gray-800 text-2xl">{count}</h3>
        <button className="rounded bg-gray-400 w-9 h-9" onClick={() => dispatch(decrement())}>
          <div className="relative -top-0.5">-</div>
        </button>
      </div>
      <div className="w-1/3 mx-auto mt-4 flex items-center border-b border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="number"
          name="increment"
          placeholder={incrementAmount.toString()}
          aria-label="Increment Amount"
          ref={inputRef}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleClick}
        >
          Change Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;
