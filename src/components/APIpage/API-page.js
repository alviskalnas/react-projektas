import React, { useState, useEffect } from 'react';
import Container from '../pages/container/Container';
import './API-page.css';

function Cat() {
  const [fact, setFact] = useState('');
  const [factLoading, setFactLoading] = useState(true);
  const [img, setImg] = useState('');
  const [imageLoading, setImageLoading] = useState(true);
  const [error, setError] = useState('');
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    getFactHandler();
    getImageHandler();
  }, []);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const getFactHandler = () => {
    setFactLoading(true);
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact);
        setFactLoading(false);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        setFactLoading(false);
      });
  };

  const getImageHandler = () => {
    setImageLoading(true);
    fetch('https://aws.random.cat/meow')
      .then((response) => response.json())
      .then((data) => {
        setImg(data.file);
        setImageLoading(false);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        setImageLoading(false);
      });
  };

  return (
    <Container>
    <div>
      <h1>Cat API</h1>
      <div>
        <button onClick={getFactHandler}>Get Random Fact</button>
        {factLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{fact}</p>
        )}
        {error && isOnline && <p>Error: {error}</p>}
      </div>
      <div>
        <button onClick={getImageHandler}>Get Random Image</button>
        {imageLoading ? (
          <p>Loading...</p>
        ) : (
          <img className="cat-img" src={img} alt="cat" />
        )}
        {error && isOnline && <p>Error: {error}</p>}
      </div>
    </div>
    </Container>
  );
}

export default Cat;







