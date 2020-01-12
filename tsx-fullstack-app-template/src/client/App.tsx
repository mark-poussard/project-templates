import React, { useState, useEffect } from 'react';
import './app.css';
import ReactImage from './react.png';
import GetUsernameResponse from '../common/model/GetUsernameResponse';

const App : React.FC = props => {
  const [username, setUsername] = useState<string | null>(null);
  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(GetUsernameResponse.deserialize)
      .then(user => setUsername(user.getUsername));
  }, [])
  return (
    <div>
      {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
      <img src={ReactImage} alt="react" />
    </div>
  );
}
export default App;
