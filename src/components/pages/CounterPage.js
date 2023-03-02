import Container from './Container';
import './Container.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [savedRates, setSavedRates] = useState([]);

  const maxCount = 10;

  const handleInputChange = (event) => {
  const value = parseInt(event.target.value);setInputValue(!isNaN(value) && value >= 0 && value <= maxCount ? value : ''); setCount(!isNaN(value) && value >= 0 && value <= maxCount ? value : 0);};
  const handlePlus = () => {setCount(Math.min(count + 1, maxCount)); setInputValue(Math.min(count + 1, maxCount));};
  const handleMinus = () => {setCount(Math.max(count - 1, 0)); setInputValue(Math.max(count - 1, 0));};
  const handlePlusTwo = () => {setCount(Math.min(count + 2, maxCount)); setInputValue(Math.min(count + 2, maxCount));};
  const handleMinusTwo = () => {setCount(Math.max(count - 2, 0)); setInputValue(Math.max(count - 2, 0));};
  const resetCount = () => {setCount(0); setInputValue('');};
  const handleSaveRate = () => {setSavedRates([...savedRates, count]);};

  useEffect(() => {
    const newColor = count < 5 ? 'green' : count > 5 ? 'red' : 'orange';
    setColor(newColor);
  }, [count]);

  return (
    <Container>
      <Link to="/">Main</Link>
      <h1>Counter</h1>
      <label>
        Enter a number:
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          disabled={count === maxCount}
          min="0"
          max={maxCount}
        />
      </label>
      <p className={`count ${color}`}>Count: {count}</p>
      <button onClick={handlePlus} disabled={count === maxCount}>+1</button>
      <button onClick={handleMinus} disabled={count === 0}>-1</button>
      <button onClick={handlePlusTwo} disabled={count > maxCount - 2}>+2</button>
      <button onClick={handleMinusTwo} disabled={count < 2}>-2</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={handleSaveRate}>Save Rate</button>
      <ul>
        {savedRates.map((rate, index) => (
          <li key={index}>{rate}</li>
        ))}
      </ul>
    </Container>
  );
};

export default CounterPage;











