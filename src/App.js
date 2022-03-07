import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { numberActions } from './store/numberSlice';
import { counterActions } from './store/counterSlice';

function App() {
  const counter = useSelector((state) => state.counter.counter)
  const num = useSelector((state) => state.num.num)
  const dispatch = useDispatch()
  const Increment = () =>{
    dispatch(counterActions.increment())
  }
  const Decrement = () =>{
    dispatch(counterActions.decrement())
  }
  function handleSubmitValue(e){
    dispatch(counterActions.addBy(num))
    e.preventDefault();
  }
  function handleChangeValue(e){
    let newVal = Number(e.target.value);
    dispatch(numberActions.newValue(newVal))
  }
  return (
        <div>
          <header>
            <nav className="nav-bar">
              <h1 className="nav-title">Counter App</h1>
            </nav>
          </header>
          <main>
            <div className='main-counter'>
              <div className='counter'>
                <h3>counter: <span>{counter}</span></h3>
                <button onClick={Increment}>Increase</button>
                <button onClick={Decrement}>Decrease</button>
              </div>
              <div className='counter-adds'>
                <form onSubmit={handleSubmitValue}>
                  <input type="number" id='counter-add-num' value={num} onChange={handleChangeValue}/>
                  <input type="submit" value="addBy"/>
                </form>
              </div>

            </div>
            
          </main>
          
          
        </div>
    
  );
}

export default App;
