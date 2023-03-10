import React, { useState, useEffect, useCallback } from 'react';
import Container from '../pages/container/Container';

function Bored() {
  const [activity, setActivity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState('');
  const [showActivity, setShowActivity] = useState(false);

  const getActivityByType = useCallback(() => {
    setIsLoading(true);
    fetch(`https://www.boredapi.com/api/activity?type=${type}`)
      .then((response) => response.json())
      .then((data) => {
        setActivity(data);
        setIsLoading(false);
        setError('');
        setShowActivity(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [type]);

  const handleSelectChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    if (type !== '') {
      getActivityByType();
    }
  }, [type, getActivityByType]);

  return (
    <Container>
    <div>
      <h1>Bored API</h1>
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          getActivityByType();
        }}>
          <label htmlFor="activity-type">Activity type:</label>
          <select name="activity-type" id="activity-type" onChange={handleSelectChange}>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>
          <button type="submit">Get Activity</button>
        </form>
        {isLoading && <p>Loading...</p>}
        {!isLoading && showActivity && (
          <ul>
            <li>{activity.activity}</li>
            <li>Type: {activity.type}</li>
            <li>Accessibility: {activity.accessibility}</li>
            <li>Participants: {activity.participants}</li>
            <li>Price: {activity.price}</li>
            <li>Key: {activity.key}</li>
          </ul>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
    </Container>
  );
}

export default Bored;










