import React, { useState, useEffect } from 'react';
import Container from '../pages/container/Container';

function Coinbase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState('USD');

  const handleGetPrice = (currency) => {
    setLoading(true);
    setError('');
    setData(null);

    fetch(`https://api.coinbase.com/v2/prices/BTC-${currency}/spot`)
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    handleGetPrice(currency);
  }, [currency]);

  return (
    <Container>
    <div>
      <h1>Coinbase API</h1>
      <label htmlFor="currency">Choose a currency:</label>
      <select name="currency" id="currency" onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="CAD">CAD</option>
      </select>
      <button onClick={() => handleGetPrice(currency)}>Get Price</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <>
          <p>Currency: {data.currency}</p>
          <p>Amount: {data.amount}</p>
        </>
      )}
    </div>
    </Container>
  );
}

export default Coinbase;

