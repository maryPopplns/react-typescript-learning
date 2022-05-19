import { useState } from 'react';

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>user is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  );
}
