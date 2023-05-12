import React, { FormEvent, FormEventHandler, RefObject, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { changeIncrementAmount, decrement, increment } from './redux/reducers/counterReducer';

function App() {
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
    <div className="p-4">
      <div>
        <h1 className="text-red-500 mb-4 text-xl">New App</h1>
        <p className="text-gray-800">
          Introducing our new template app - the ultimate solution for creating beautiful and
          functional mobile apps in no time! With this app, you can easily build a custom app for
          your business, organization, or personal use.
        </p>
      </div>
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

export default App;
