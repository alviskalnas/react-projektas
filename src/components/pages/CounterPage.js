import Container from './Container';
import './Container.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CounterPage = () => {
    const [count, setCount] = useState(0);
    const [countHistory, setCountHistory] = useState([]);

    const counterHandler = (num) => setCount(prevState => Math.min(Math.max(prevState + num, 0), 10));

    const handleDeleteRate = (id) => {
        const updatedRates = countHistory.filter(rate => rate.id !== id);
        setCountHistory(updatedRates);
    };

    const handleSaveRate = () => {
        const newRate = {
            id: Math.random(),
            rate: count
        };
        setCountHistory(prevState => [newRate, ...prevState]);
    };

    const numberHandler = (event) => {
        const newValue = parseInt(event.target.value);
        setCount(Math.min(Math.max(newValue, 0), 10));
    };

    return (
        <Container>
            <Link to="/">Main</Link>
            <h1>Counter</h1>
            <label htmlFor="countInput">Enter a number:</label>
            <input
                type="number"
                id="countInput"
                value={count}
                onChange={numberHandler}
                disabled={count === 10}
                min="0"
                max="10"
            />
            <p className={`count ${count < 5 ? 'green' : count > 5 ? 'red' : 'orange'}`}>Count: {count}</p>
            <button onClick={() => counterHandler(1)} disabled={count === 10}>+1</button>
            <button onClick={() => counterHandler(-1)} disabled={count === 0}>-1</button>
            <button onClick={() => counterHandler(2)} disabled={count > 8}>+2</button>
            <button onClick={() => counterHandler(-2)} disabled={count < 2}>-2</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={handleSaveRate}>Save Rate</button>
            {countHistory.length > 0 && (
                <ul>
                    {countHistory.map(rate => (
                        <li key={rate.id}>
                            {rate.rate}
                            <button onClick={() => handleDeleteRate(rate.id)}>X</button>
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    );
};

export default CounterPage;













