import { useState } from 'react';

type authUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<authUser>({} as authUser);
  function handleLogin() {
    setUser({
      name: 'spencer',
      email: 'email',
    });
  }
  function handleLogout() {
    setUser({} as authUser);
  }
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>user name is {user.name}</div>
    </div>
  );
}
