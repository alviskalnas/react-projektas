import React, { useEffect, useState } from 'react';
import Container from '../pages/container/Container';


const FakeAccount = () => {
  const [account, setAccount] = useState(null);

  const fetchAccount = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setAccount(data.results[0]);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  const handleCreateNewAccountClick = () => {
    fetchAccount();
  };

  return (
    <Container>
    <div className="fake-account">
      {account ? (
        <>
          <img src={account.picture.large} alt="Profile" />
          <h2>{`${account.name.first} ${account.name.last}`}</h2>
          <p>
            <strong>Gender:</strong> {account.gender}
          </p>
          <p>
            <strong>Date of Birth:</strong> {new Date(account.dob.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Country:</strong> {account.location.country}
          </p>
          <p>
            <strong>Address:</strong> {`${account.location.street.name} ${account.location.street.number}`}
          </p>
          <p>
            <strong>Phone:</strong> {account.phone}
          </p>
          <p>
            <strong>Email:</strong> {account.email}
          </p>
        </>
      ) : (
        <p>Loading account information...</p>
      )}
      <button onClick={handleCreateNewAccountClick}>Create New Account</button>
    </div>
    </Container>
  );
};

export default FakeAccount;






