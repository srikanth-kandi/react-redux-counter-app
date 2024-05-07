import { useState } from 'react';
import Counter from './components/Counter'
import logo from './react-redux.svg'
import { useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
} from './redux/counter/counterSlice';
import './App.css'

function App() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="shadow-container">
        <img src={logo} className="logo" />
        <div className="number-container">
          <button
            className="decrement-button"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <Counter />
          <button
            className="increment-button"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className="input-container">
          <input
            className="text-box"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button
            className="addAmountButton"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            className="asyncButton"
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
        <div className="input-container-sm">
          <div className="input-sm">
            <input
              className="text-box"
              value={incrementAmount}
              onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
              className="addAmountButton-sm"
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
            >
              Add Amount
            </button>
          </div>
          <button
            className="asyncButton-sm"
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
